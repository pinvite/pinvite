import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as Twit from 'twit'
import * as express from 'express'
import * as fs from 'fs'
import { Invitation, isInvitation } from './domain/Invitation';
import { TwitterUserInfo, isTwitterUserInfo } from './domain/Twitter';
import { toOgpValues } from './domain/OgpValues';

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

async function storeInvitation(
  firebaseUserId: string,
  invitation: Invitation
): Promise<string> {
  const result = await firestore
    .collection('users').doc(firebaseUserId)
    .collection('invitations').add(invitation)
  return result.id
}

async function retrieveInvitation(
  firebaseUserId: string,
  invitationId: string
): Promise<Invitation> {
  const snapshot = await firestore
    .collection('users').doc(firebaseUserId)
    .collection('invitations').doc(invitationId).get()

  const invitation = snapshot.data()
  if(isInvitation(invitation))
    return invitation
  else
    throw new Error('Failed to retrieve invitation')
}

async function retrieveTwitterUserInfo(firebaseUserId: string): Promise<TwitterUserInfo> {
  const snapshot = await firestore.collection('users').doc(firebaseUserId).get()
  const data = snapshot.data()
  
  if(isTwitterUserInfo(data))
    return data
  else
    throw new Error('Failed to retrieve twitter user info')
}

async function tweet(
  twitterUserInfo: TwitterUserInfo,
  invitation: Invitation,
  pageURL: string
): Promise<{}> {
  const tweetData = new Twit({
    consumer_key:        twitterApiKey,
    consumer_secret:     twitterApiSecret,
    access_token:        twitterUserInfo.oauthToken,
    access_token_secret: twitterUserInfo.oauthTokenSecret,
  })
  return tweetData.post('statuses/update', { status: "#pinvite " + pageURL })  
}

userApp.post('/users/:userId/invites', async (request: express.Request, response: express.Response) => {
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
  console.log('Store the invitation data and tweet it');
  //********************************************************************
  const invitation = request.body
  if(isInvitation(invitation)) {
    console.log("bad request received")
    response.status(400).send("Bad Request: properties are missing or wrong in the body")  
    return
  } else {
    // get stored user Twitter credentials, store tweet information to Firease, and tweet
    try {
      const storeResult = await storeInvitation(firebaseUserId, invitation)
      const twitterUserInfo = await retrieveTwitterUserInfo(firebaseUserId)
      
      // https://stackoverflow.com/questions/10183291/how-to-get-the-full-url-in-express
      const pageURL = request.protocol + '://' + request.get('host') + request.originalUrl;
      await tweet(twitterUserInfo, invitation, pageURL)
      response.send('successfully tweeted')
      return
    } catch(error) {
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
    const invitation = await retrieveInvitation(request.params.userId, request.params.invitationId)
    const pageURL = request.protocol + '://' + request.get('host') + request.originalUrl;
    const ogpValues = toOgpValues(invitation, pageURL)
    // Twitter Cards and Open Graph at https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html
    const html = usersHtml
      .replace('*|twitter:card|*',    ogpValues.twitterCard)
      .replace('*|twitter:site|*',    ogpValues.twitterSite) 
      .replace('*|twitter:creator|*', ogpValues.twitterCreater)
      .replace('*|og:url|*',          ogpValues.ogURL)
      .replace('*|og:title|*',        ogpValues.ogTitle)
      .replace('*|og:description|*',  ogpValues.ogDescription)
      .replace('*|og:image|*',        ogpValues.ogImage)
      .replace('*|title|*',           invitation.title)
  
    response.send(html)
  } catch (error) {
    console.log(error)
    response.status(404).send("No such invitation")
  }
})

exports.userApp = functions.https.onRequest(userApp)