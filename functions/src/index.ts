import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'
import * as Twit from 'twit'

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

admin.initializeApp()

// Firebase environment configuration for Firebase Cloud Functions
// https://firebase.google.com/docs/functions/config-env
const twitterApiKey    = functions.config().twitter.api.key
const twitterApiSecret = functions.config().twitter.api.secret

export const helloWorld = functions.https.onRequest((request, response) => {
  console.log('firebase function called with request:')
  console.log(request)

  const twit = Twit({
    consumer_key:        twitterApiKey,
    consumer_secret:     twitterApiSecret,
    access_token:        request.body.access_token,
    access_token_secret: request.body.access_token_secret
  })

  console.log('twit initialized as:')
  console.log(twit)

  twit.post('statuses/update', { status: 'hello world!' }, function(err, data, twitResponse) {
    console.log('status update done data:')
    console.log(data)
    console.log('status update done error:')
    console.log(err)
  })
  
  response.send("Hello from Firebase!");
});
