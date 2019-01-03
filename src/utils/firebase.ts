import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import config from '../../config/firebase/config'
import { isTwitterUserInfo, TwitterUserInfo } from '../../domain/Twitter'

firebase.initializeApp(config)
if (typeof console !== 'undefined') {
  console.log('Initializing Firebase Client as:')
  console.log(config)
}

export const providerGoogle = new firebase.auth.GoogleAuthProvider()
export const providerFacebook = new firebase.auth.FacebookAuthProvider()
export const providerTwitter = new firebase.auth.TwitterAuthProvider()

export const firestore = firebase.firestore()
// Disable deprecated features
firestore.settings({
  timestampsInSnapshots: true,
})

export interface FirebaseUserInfo {
  userId: string
  idToken: string
}

/**
 * Firebase JavaScript SDK's types do not know about Twitter specific details,
 * however, still the returned instances of these types have properties holding values
 * like the Twitter access token and the access token credential.
 * 
 * So we need to check if the properties exist, and here we are using User-defined
 * Type Guards technique.
 */
function extractTwitterUserInfo(
  userCredential: firebase.auth.UserCredential
): TwitterUserInfo | null {
  // *** User-defined Type Guards at: ***
  //   https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
  interface FirebaseTwitterCredential {
    accessToken: string
    secret: string
  }
  function isTwitterCredential(obj: any): obj is FirebaseTwitterCredential {
    const credential = obj as FirebaseTwitterCredential
    return (
      credential.accessToken !== undefined && credential.secret !== undefined
    )
  }

  interface FirebaseTwitterScreenName {
    screen_name: string
  }
  function isTwitterScreenName(obj: any): obj is FirebaseTwitterScreenName {
    // User-defined Type Guards at https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
    return (obj as FirebaseTwitterScreenName).screen_name !== undefined
  }

  // *** Actual logic ***
  if (userCredential.user == null) {
    return null
  } else if (userCredential.credential == null) {
    return null
  } else if (
    // User-defined Type Guards technique to get around TypeScript compilation errors.
    // 'accessToken' and 'secret' exists in userCredentials.credential according to
    // https://firebase.google.com/docs/auth/web/twitter-login,
    // but Firebase Auth's type UserCredential doesn't express the existence of them
    !isTwitterCredential(userCredential.credential)
  ) {
    return null
  } else if (
    // Similar techniques to get around TypeScript complation errors.
    userCredential.additionalUserInfo == null ||
    userCredential.additionalUserInfo.profile == null ||
    !isTwitterScreenName(userCredential.additionalUserInfo.profile)
  ) {
    return null
  } else {
    return {
      userId: userCredential.additionalUserInfo.profile.screen_name,
      oauthToken: userCredential.credential.accessToken,
      oauthTokenSecret: userCredential.credential.secret,
    }
  }
}

interface FirebaseAuthTwitterCredentials {
  additionalUserInfo?: firebase.auth.AdditionalUserInfo | null
  credential: firebase.auth.AuthCredential | null
  operationType?: string | null
  user: firebase.User | null
}

export async function firebaseLogin(): Promise<FirebaseUserInfo> {
  try {
    const userCredential = await firebase.auth().signInWithPopup(providerTwitter)
    const firebaseUser = userCredential.user
    const twitterUserInfo = extractTwitterUserInfo(userCredential)

    if (firebaseUser == null) {
      return Promise.reject(new Error('Failed to get user info upon login'))
    } else if (twitterUserInfo == null) {
      return Promise.reject(new Error('Failed to get necessary Twitter info via Sign-In'))
    } else {
      const firebaseIdToken = await firebaseUser.getIdToken()
      await firestore
        .collection('users')
        .doc(firebaseUser.uid)
        .set({ twitter: twitterUserInfo })
      return Promise.resolve({idToken: firebaseIdToken, userId: firebaseUser.uid})
    }
  } catch (error) {
    return Promise.reject(new Error('Internal server error upon login'))
  }
}

export async function firebaseAuthStateChange(): Promise<FirebaseUserInfo> {
  return new Promise<FirebaseUserInfo>((resolve, reject) => {
    // firebase.auth().onAuthStateChanged doesn't return Promise but it's a traditional callback
    // so convert it into Promise using a common technique
    firebase.auth().onAuthStateChanged(async user => {
      if (user == null) {
        reject(new Error('Failed to get user info upon auto login'))
      } else {
        try {
          const idToken = await user.getIdToken()
          const userId = user.uid
          resolve({idToken, userId})
        } catch (error) {
          reject(new Error('Auto login error. Please login again.'))
        }
      }
    })
  })
}

export default firebase
