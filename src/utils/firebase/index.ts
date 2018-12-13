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
  accessToken: string,
  secret: string,
}

interface FirebaseIdToken {
  idToken: string
}

export type TwitterUserInfo = TwitterCredential & TwitterScreenName
export type UserInfo = TwitterCredential & TwitterScreenName & FirebaseIdToken

function isTwitterScreenName(obj: any): obj is TwitterScreenName {
  return (obj as TwitterScreenName).screen_name !== undefined
}

function isTwitterCredential(obj: any): obj is TwitterCredential {
  const credential = obj as TwitterCredential
  return credential.accessToken !== undefined && credential.secret !== undefined
}

function isTwitterUserInfo(obj: any): obj is TwitterUserInfo {
  return isTwitterScreenName(obj) && isTwitterCredential(obj)
}

export async function firebaseLogin(): Promise<{}> {
  try {
    const userCredentials = await firebase.auth().signInWithPopup(providerTwitter)
    const firebaseUser = userCredentials.user
    if (firebaseUser == null) {
      return Promise.reject(new Error('Failed to get user info upon login'))
    } else {
      const userDoc = await firestore.collection('users').doc(firebaseUser.uid).get()

      // data() returns 'undefined' if the document doesn't exist.
      const data = userDoc.data()
      if (data !== undefined
        && data.twitter
        && isTwitterUserInfo(data.twitter)
      ) {
        // TwitterUserInfo was already stored in Firebase, OK
        return Promise.resolve({})

      // if TwitterUserInfo is not stored in Firestore, then try storing it
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
            accessToken: userCredentials.credential.accessToken,
            screen_name: userCredentials.additionalUserInfo.profile.screen_name,
            secret: userCredentials.credential.secret,
          }
          await firestore.collection('users').doc(firebaseUser.uid).set({twitter: twitterUserInfo})
          return Promise.resolve({})
        }
      }
    }
  } catch (error) {
    return Promise.reject(new Error('Internal server error upon login'))
  }
}

export async function makeSureTwitterUserInfoStored(): Promise<UserInfo> {

  async function handleUser(user: firebase.User): Promise<UserInfo> {
    try {
      const idToken = await user.getIdToken()
      const userDoc = await firestore.collection('users').doc(user.uid).get()

      // data() returns 'undefined' if the document doesn't exist.
      const data = userDoc.data()
      if (data !== undefined
        && data.twitter
        && isTwitterUserInfo(data.twitter)
      ) {
        return Promise.resolve({...data.twitter, idToken} )
      } else {
        // TwitterUserInfo cannot be obtained inside firebase.auth().onAuthStateChanged()
        // so, flag an error and encourage the user to re-login
        return Promise.reject(new Error('Failed to get necessary Twitter info upon auto login. Try logging in again.'))
      }
    } catch (error) {
      return Promise.reject(new Error('Internal server error upon auto login'))
    }
  }

  return new Promise<UserInfo>((resolve, reject) => {
    // firebase.auth().onAuthStateChanged doesn't return Promise but it's a traditional callback
    // so convert it into Promise using a common technique
    firebase.auth().onAuthStateChanged((user) => {
      if (user == null) {
        reject(new Error('Failed to get user info upon auto login'))
      } else {
        handleUser(user).then(resolve)
      }
    })
  })
}

export default firebase
