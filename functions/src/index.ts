import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'
import * as Twit from 'twit'
import * as express from 'express'
import { resolve } from 'url';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
admin.initializeApp()
const firestore = admin.firestore();
firestore.settings({timestampsInSnapshots: true});

// Firebase environment configuration for Firebase Cloud Functions
// https://firebase.google.com/docs/functions/config-env
const twitterApiKey    = functions.config().twitter.api.key
const twitterApiSecret = functions.config().twitter.api.secret

const userApp = express()

// At the moment, user's invitations are everything we can show for the user, so redirecting
userApp.get('/users/:userId/', (request, response) => {
  response.redirect("/users/" + request.params.userId + "/invites" )
})

userApp.post('/users/:userId/invites', (request, response) => {
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

  let idToken;
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

  admin.auth().verifyIdToken(idToken).then((decodedIdToken) => {
    console.log('ID Token correctly decoded', decodedIdToken);
    const twitterUser = decodedIdToken;
    console.log(twitterUser)

    if(request.params.userId != decodedIdToken.uid) {
      response.status(403)
      response.send("Unauthorized: the logged-in user is not allowed to POST a resource to the given path")  
      return;
    } 
   
    // Firstly, get userDoc to see the twitter user for the signed-in user = request.params.userId
    firestore
      .collection('users').doc(request.params.userId).get()
      .then(userDoc => {

        // Add an empty document to get the ID, before inserting the full data
        firestore
          .collection('users').doc(request.params.userId)
          .collection('invites').add({}) 
          .then(inviteDoc => {

            inviteDoc.id
            const url = "https://pinvite.fun/users/" + request.params.userId + "/invites/" + inviteDoc.id
            const inviteData = {
              ogp: {
                'twitter:card'    : "summary_large_image",
                'twitter:site'    : "@orgpinvite",
                'twitter:creator' : twitterUser.uid,
                'og:url'          : url,
                'og:title'        : request.body.title,
                'og:description'  : request.body.description,
                'og:image'        : request.body.image_url
              }
            }

            firestore
              .collection('users').doc(request.params.userId)
              .collection('invites').doc(inviteDoc.id).set(inviteData)
              .then(doc => {
                response.send("successfully prepared for tweet but not tweeted yet")  
              }).catch(err => {
                response.status(500)
                response.send("Server error: failed to tweet")      
              })
  
          }).catch(err => {
            response.status(500)
            response.send("Server error: failed to tweet")      
          })

      }).catch(err => {
        response.status(500)
        response.send("Server error: failed to tweet")      
      })

    }).catch((error) => {
    console.error('Error while verifying Firebase ID token:', error);
    response.status(403).send('Unauthorized: user cannot be verified');
  });
})

userApp.get('/users/:userId/invites', (request, response) => {
  response.send("hello GET /users/:userId/invites")
})

userApp.get('/users/:userId/invites/:invitationId', (request, response) => {
  firestore
    .collection('users').doc(request.params.userId)
    .collection('invites').doc(request.params.invitationId).get().then(invitationDoc => {
      //This should actually be rendered by React SSR
      const html =
        '<!DOCTYPE html>' +
        '<html>' +
        '  <head>' +
        '    <meta charset="UTF-8">' +
        '    <meta name="twitter:card" content="' + invitationDoc.data()['twitter:card'] + '" />' +
        '    <meta name="twitter:site" content="' + invitationDoc.data()['twitter:site'] + '" />' +
        '    <meta name="twitter:creator" content="' + invitationDoc.data()['twitter:creator'] + '" />' +
        '    <meta property="og:url" content="' + invitationDoc.data()['og:url'] + '" />' +
        '    <meta property="og:title" content="' + invitationDoc.data()['og:title'] + '" />' +
        '    <meta property="og:description" content="' + invitationDoc.data()['og:description'] + '" />' +
        '    <meta property="og:image" content="' + invitationDoc.data()['og:image'] + '" />' +
        '    <title>title</title>' +
        '  </head>' +
        '  <body>' +
        '        HEEELLLOOOOO WHAAAAATTT THE FFFFFFFFFFFF!!!!!!!  ' + 
        '  </body>' +
        '</html>'

        response.send(html)
    }).catch(err => {
      response.status(404)
      response.send("No such invitation")      
    })
})

// export const helloWorld = functions.https.onRequest((request, response) => {
//   console.log('firebase function called with request:')
//   console.log(request)

//   const twit = Twit({
//     consumer_key:        twitterApiKey,
//     consumer_secret:     twitterApiSecret,
//     access_token:        request.body.access_token,
//     access_token_secret: request.body.access_token_secret
//   })

//   console.log('twit initialized as:')
//   console.log(twit)

//   twit.post('statuses/update', { status: 'hello world!' }, function(err, data, twitResponse) {
//     console.log('status update done data:')
//     console.log(data)
//     console.log('status update done error:')
//     console.log(err)
//   })
  
//   response.send("Hello from Firebase!");
// })

exports.userApp = functions.https.onRequest(userApp)