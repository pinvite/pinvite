import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyB0wAwkW0DAfyKT7bkhLuQ3IeMPD_ykNUQ',
  authDomain: 'pinvite-app.firebaseapp.com',
  databaseURL: 'https://pinvite-app.firebaseio.com',
  projectId: 'pinvite-app',
  // storageBucket: "pinvite-app.appspot.com",
  // messagingSenderId: "474917508837"
})

export const providerGoogle = new firebase.auth.GoogleAuthProvider()
export const providerFacebook = new firebase.auth.FacebookAuthProvider()
export const providerTwitter = new firebase.auth.TwitterAuthProvider()
export const firestore = firebase.firestore() // firestroeを使う場合
// Disable deprecated features
firestore.settings({
  timestampsInSnapshots: true,
})

interface TwitterScreenName {
  screen_name: string
}

interface TwitterCredential {
  access_token: string,
  secret: string,
}

type TwitterUserInfo = TwitterCredential & TwitterScreenName

function isTwitterScreenName(obj: any): obj is TwitterScreenName {
  return (obj as TwitterScreenName).screen_name !== undefined
}

function isTwitterCredential(obj: any): obj is TwitterCredential {
  const credential = obj as TwitterCredential
  return credential.access_token !== undefined && credential.secret !== undefined
}

function isTwitterUserInfo(obj: any): obj is TwitterUserInfo {
  return isTwitterScreenName(obj) && isTwitterCredential(obj)
}

export async function login(): Promise<TwitterUserInfo> {
  try {
    const userCredentials = await firebase.auth().signInWithPopup(providerTwitter)
    const firebaseUser = userCredentials.user
    if (firebaseUser == null) {
      return Promise.reject(new Error('Failed to get user info upon login'))
    } else {
      const userDoc = await firestore.collection('users').doc(firebaseUser.uid).get()
      const data = userDoc.data()
      // data() returns 'undefined' if the document doesn't exist.
      if (data !== undefined
        && data.twitter
        && isTwitterUserInfo(data.twitter)
      ) {
        return Promise.resolve({
          access_token: data.twitter.access_token,
          screen_name: data.twitter.screen_name,
          secret: data.secret,
        })

      // if data is not stored in Firestore, then try storing it
      } else {
        if (
          userCredentials.credential == null ||
          // According to https://firebase.google.com/docs/auth/web/twitter-login
          // userCredentials.credential should have `accessToken` and `secret` properties
          !isTwitterCredential(userCredentials.credential) ||
          userCredentials.additionalUserInfo == null ||
          userCredentials.additionalUserInfo.profile == null ||
          !isTwitterScreenName(userCredentials.additionalUserInfo.profile)
        ) {
          return Promise.reject(new Error('Failed to get necessary Twitter info via Sign-In'))
        } else {
          const twitterUserInfo: TwitterUserInfo = {
            access_token: userCredentials.credential.access_token,
            screen_name: userCredentials.additionalUserInfo.profile.screen_name,
            secret: userCredentials.credential.secret,
          }
          await firestore.collection('users').doc(firebaseUser.uid).set({twitter: twitterUserInfo})
          return Promise.resolve(twitterUserInfo)
        }
      }
    }
  } catch (error) {
    return Promise.reject(new Error('Internal server error upon login'))
  }
}

export default firebase
