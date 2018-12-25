import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as Twit from 'twit'
import * as express from 'express'
import * as fs from 'fs'
import { WorkshopPromotion, isWorkshopPromotion } from './domain/Promotion';
import { TwitterUserInfo, isTwitterUserInfo } from './domain/Twitter';

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
  response.redirect("/users/" + request.params.userId + "/invites" )
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

async function storePromotion(
  firebaseUserId: string,
  promotion: WorkshopPromotion
): Promise<string> {
  const result = await firestore
    .collection('users').doc(firebaseUserId)
    .collection('promotions').add(promotion)
  return result.id
}

async function tweet(
  twitterUserInfo: TwitterUserInfo,
  promotion: WorkshopPromotion,
  pageURL: string
): Promise<{}> {
  const tweetData = new Twit({
    consumer_key:        twitterApiKey,
    consumer_secret:     twitterApiSecret,
    access_token:        twitterUserInfo.oauthToken,
    access_token_secret: twitterUserInfo.oauthTokenSecret,
  })
  return tweetData.post('statuses/update', { status: "#pinvite " + promotion })  
}

async function retrieveTwitterUserInfo(firebaseUserId: string): Promise<TwitterUserInfo> {
  const snapshot = await firestore.collection('users').doc(firebaseUserId).get()
  const data = snapshot.data()
  
  if(isTwitterUserInfo(data)) return data
  else throw new Error('Failed to retrieve twitter user info')
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
  console.log('Store the promotion data and tweet it');
  //********************************************************************
  const promotion = request.body
  if(isWorkshopPromotion(promotion)) {
    console.log("bad request received")
    response.status(400).send("Bad Request: properties are missing or wrong in the body")  
    return
  } else {
    // get stored user Twitter credentials, store tweet information to Firease, and tweet
    try {
      const storeResult = await storePromotion(firebaseUserId, promotion)
      const twitterUserInfo = await retrieveTwitterUserInfo(firebaseUserId)

      // https://stackoverflow.com/questions/10183291/how-to-get-the-full-url-in-express
      const pageURL = request.protocol + '://' + request.get('host') + request.originalUrl;
      await tweet(twitterUserInfo, promotion, pageURL)
      response.send('successfully tweeted')
      return
    } catch(error) {
      response.status(500).send("Server error: failed to tweet")      
      return
    }
  }
})

//This probably doesn't need to be on the function side, nor SSR 
userApp.get('/users/:userId/invites', (request, response) => {
  response.send("hello GET /users/:userId/invites")
})

//This needs to be SSR
const usersHtml = fs.readFileSync(__dirname + '/users/index.html', 'utf8')
userApp.get('/users/:userId/invites/:invitationId', (request, response) => {
  console.log(request.params.userId)
  console.log(request.params.invitationId)
  firestore
    .collection('users').doc(request.params.userId)
    .collection('invites').doc(request.params.invitationId).get().then(invitationDoc => {
      if(!invitationDoc.exists){
        console.log('No such invitationNo such invitationNo such invitationNo such invitation')
        response.status(404)
        response.send("No such invitation")    
      } else {
        const html = usersHtml
          .replace('*|twitter:card|*',    invitationDoc.data().ogp['twitter:card'])
          .replace('*|twitter:site|*',    invitationDoc.data().ogp['twitter:site']) 
          .replace('*|twitter:creator|*', invitationDoc.data().ogp['twitter:creator'])
          .replace('*|og:url|*',          invitationDoc.data().ogp['og:url'])
          .replace('*|og:title|*',        invitationDoc.data().ogp['og:title'])
          .replace('*|og:description|*',  invitationDoc.data().ogp['og:description'])
          .replace('*|og:image|*',        invitationDoc.data().ogp['og:image'])         
          .replace('*|title|*',           invitationDoc.data().ogp['og:title'])
        
        response.send(html)
      }
    }).catch(err => {
      console.log(err)
      response.status(404)
      response.send("No such invitation")    
    })
  })

exports.userApp = functions.https.onRequest(userApp)