import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as Twit from 'twit'
import * as express from 'express'
import * as fs from 'fs'
import { InvitationInfo, isInvitationInfo } from './domain/Invitation';
import { TwitterUserInfo, isTwitterUserInfo } from './domain/Twitter';
import { toOgpValues } from './domain/OgpValues';
import { isInvitationRequest, InvitationRequest } from './protocols/InvitationRequest';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
admin.initializeApp()
const firestore = admin.firestore();
firestore.settings({timestampsInSnapshots: true})

// Firebase environment configuration for Firebase Cloud Functions
// https://firebase.google.com/docs/functions/config-env
const twitterApiKey    = functions.config().twitter.api.key
const twitterApiSecret = functions.config().twitter.api.secret

const userApp = express()

// At the moment, user's invitations are everything we can show for the user, so redirecting
userApp.get('/users/:userId/', (request, response) => {
  response.redirect("/users/" + request.params.userId + "/invitations" )
})

async function extractFirebaseUserIdToken(request: express.Request): Promise<string> {
  // following the sample at https://github.com/firebase/functions-samples/blob/Node-8/authorized-https-endpoint/functions/index.js
  if ((!request.headers.authorization || !request.headers.authorization.startsWith('Bearer ')) &&
      !(request.cookies && request.cookies.__session)) {
    throw new Error('No Firebase ID token was passed as a Bearer token in the Authorization header.\n' +
      'Make sure you authorize your request by providing the following HTTP header:\n' +
      'Authorization: Bearer <Firebase ID Token>\n' +
      'or by passing a "__session" cookie.'
    )
  }

  if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
    // Read the ID Token from the Authorization header.
    return request.headers.authorization.split('Bearer ')[1]
  } else if(request.cookies) {
    // Read the ID Token from cookie.
    return request.cookies.__session
  } else {
    // No cookie
    throw new Error('Firebase user ID token not found in Authorization header nor in the cookie.');
  }
}

async function allocateInvitationInfo(
  firebaseUserId: string
): Promise<string> {
  const result = await firestore
    .collection('users').doc(firebaseUserId)
    .collection('invitations').add({})
  return result.id
}

async function storeInvitationInfo(
  firebaseUserId: string,
  invitationId: string,
  invitationInfo: InvitationInfo
): Promise<{}> {
  const result = await firestore
    .collection('users').doc(firebaseUserId)
    .collection('invitations').doc(invitationId).set(invitationInfo)
  return result
}

async function retrieveInvitationInfo(
  firebaseUserId: string,
  invitationId: string
): Promise<InvitationInfo> {
  const snapshot = await firestore
    .collection('users').doc(firebaseUserId)
    .collection('invitations').doc(invitationId).get()

  const invitationInfo = snapshot.data()
  if(isInvitationInfo(invitationInfo))
    return invitationInfo
  else
    throw new Error('Failed to retrieve invitationInfo')
}

async function retrieveTwitterUserInfo(firebaseUserId: string): Promise<TwitterUserInfo> {
  const snapshot = await firestore.collection('users').doc(firebaseUserId).get()
  const data = snapshot.data()
  
  if(data.twitter !== null && isTwitterUserInfo(data.twitter))
    return data.twitter
  else
    throw new Error('Failed to retrieve twitter user info')
}

async function tweet(
  twitterUserInfo: TwitterUserInfo,
  invitationInfo: InvitationInfo
): Promise<{}> {
  const tweetData = new Twit({
    consumer_key:        twitterApiKey,
    consumer_secret:     twitterApiSecret,
    access_token:        twitterUserInfo.oauthToken,
    access_token_secret: twitterUserInfo.oauthTokenSecret,
  })
  return tweetData.post('statuses/update', { status: invitationInfo.title + " #pinvite\n" + invitationInfo.pageURL })  
}

function toPageURL(origin: string, firebaseUserId: string, invitationId: string): string {
  return origin + "/users/" + firebaseUserId + "/invitations/" + invitationId
}

function toInvitationInfo(
  invitationRequest: InvitationRequest,
  twitterUserId: string,
  firebaseUserId: string,
  invitationId: string
): InvitationInfo {
  return {
    twitterCard: 'summary_large_image',
    twitterSiteOwnerId: 'orgpinvite',
    twitterUserId: twitterUserId,
    title: invitationRequest.title,
    details: invitationRequest.details,
    time: invitationRequest.time,
    moneyAmount: invitationRequest.moneyAmount,
    imageURL: invitationRequest.imageURL,
    pageURL: toPageURL(invitationRequest.origin, firebaseUserId, invitationId)
  }
}

userApp.post('/users/:userId/invitations', async (request: express.Request, response: express.Response) => {
  //********************************************************************
  console.log('Check if request is authorized with Firebase ID token');
  //********************************************************************
  try {
    const firebaseUserIdToken = await extractFirebaseUserIdToken(request)
    const decodedIdToken = await admin.auth().verifyIdToken(firebaseUserIdToken)
    if(request.params.userId !== decodedIdToken.uid)
      throw new Error('Login user unmatched with the request path.')

  } catch(error) {
    console.log(error)
    response.status(403).send("Unauthorized: user not allowed to perform this action")  
    return;
  } 
  const firebaseUserId: string = request.params.userId

  //********************************************************************
  console.log('Store the invitationInfo data and tweet it');
  //********************************************************************
  const invitationRequest = request.body
  if(!isInvitationRequest(invitationRequest)) {
    console.log("bad request received")
    response.status(400).send("Bad Request: properties are missing or wrong in the body")  
    return
  } else {
    // get stored user Twitter credentials, store tweet information to Firease, and tweet
    try {
      const twitterUserInfo = await retrieveTwitterUserInfo(firebaseUserId)
      const invitationId = await allocateInvitationInfo(firebaseUserId)
      const invitationInfo = toInvitationInfo(invitationRequest, twitterUserInfo.userId, firebaseUserId, invitationId)
      await storeInvitationInfo(firebaseUserId, invitationId, invitationInfo)
      
      // https://stackoverflow.com/questions/10183291/how-to-get-the-full-url-in-express
      await tweet(twitterUserInfo, invitationInfo)
      console.log('successfully tweeted')
      response.send('successfully tweeted')
      return
    } catch(error) {
      console.log(error)
      response.status(500).send("Server error: failed to tweet")      
      return
    }
  }
})

//This probably doesn't need to be on the function side, nor SSR 
userApp.get('/users/:userId/invitations', (request, response) => {
  response.send("hello GET /users/:userId/invitations")
})

//This needs to be SSR
const usersHtml = fs.readFileSync(__dirname + '/users/index.html', 'utf8')
userApp.get('/users/:userId/invitations/:invitationId', async (request, response) => {
  try {
    const invitationInfo = await retrieveInvitationInfo(request.params.userId, request.params.invitationId)
    const ogpValues = toOgpValues(invitationInfo)
    // Twitter Cards and Open Graph at https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html
    const html = usersHtml
      .replace('*|twitter:card|*',    ogpValues.twitterCard)
      .replace('*|twitter:site|*',    ogpValues.twitterSite) 
      .replace('*|twitter:creator|*', ogpValues.twitterCreator)
      .replace('*|og:url|*',          ogpValues.ogURL)
      .replace('*|og:title|*',        ogpValues.ogTitle)
      .replace('*|og:description|*',  ogpValues.ogDescription)
      .replace('*|og:image|*',        ogpValues.ogImage)
      .replace('*|title|*',           invitationInfo.title)
  
    response.send(html)
  } catch (error) {
    console.log(error)
    response.status(404).send("No such invitationInfo")
  }
})

exports.userApp = functions.https.onRequest(userApp)