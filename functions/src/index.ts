import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as Twit from 'twit'
import * as express from 'express'
import { resolve } from 'url'
import * as fs from 'fs'

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

userApp.post('/users/:userId/invites', async (request: express.Request, response: express.Response) => {
  
  // following the sample at https://github.com/firebase/functions-samples/blob/Node-8/authorized-https-endpoint/functions/index.js
  console.log('Check if request is authorized with Firebase ID token');

  if ((!request.headers.authorization || !request.headers.authorization.startsWith('Bearer ')) &&
      !(request.cookies && request.cookies.__session)) {
    console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
        'Make sure you authorize your request by providing the following HTTP header:',
        'Authorization: Bearer <Firebase ID Token>',
        'or by passing a "__session" cookie.');
    response.status(403).send('Unauthorized: user needs to login');
    return;
  }

  let idToken: string
  if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
    console.log('Found "Authorization" header');
    // Read the ID Token from the Authorization header.
    idToken = request.headers.authorization.split('Bearer ')[1];
  } else if(request.cookies) {
    console.log('Found "__session" cookie');
    // Read the ID Token from cookie.
    idToken = request.cookies.__session;
  } else {
    // No cookie
    response.status(403).send('Unauthorized: user needs to login');
    return;
  }

  // verify the idToken in HTTP 'Authorization' header is correct for the path /users/:userId/invites
  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken)
    if(request.params.userId !== decodedIdToken.uid)
      throw new Error('Login user unmatched with the request path.')
  } catch(error) {
    console.log(error)
    response.status(403).send("Unauthorized: user not allowed to perform this action")  
    return;
  }
  
  // get stored user Twitter credentials, store tweet information to Firease, and tweet
   try {
    const userDoc = await firestore
      .collection('users').doc(request.params.userId).get()

    if (userDoc == null) throw new Error('Failed to get user doc for ' + request.params.userId)

      // Add an empty document to get the ID, before inserting the full data
    const invitationDoc = await firestore
      .collection('users').doc(request.params.userId)
      .collection('invites').add({}) 

    const invitationData = {
      ogp: {
        'twitter:creator' : "@" + userDoc.data().twitter.user_id,
        'og:title'        : request.body.title,
        'og:description'  : request.body.description,
        'og:image'        : request.body.image_url
      }
    }

    await firestore
      .collection('users').doc(request.params.userId)
      .collection('invites').doc(invitationDoc.id).set(invitationData)
    
    const tweetData = new Twit({
        consumer_key:        twitterApiKey,
        consumer_secret:     twitterApiSecret,
        access_token:        userDoc.data().twitter.access_token,
        access_token_secret: userDoc.data().twitter.secret,
      })

      await tweetData.post('statuses/update', { status: "#pinvite " + url })

   } catch (error) {
    response.status(500).send("Server error: failed to tweet")      
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