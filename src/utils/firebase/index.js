import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyB0wAwkW0DAfyKT7bkhLuQ3IeMPD_ykNUQ",
  authDomain: "pinvite-app.firebaseapp.com",
  databaseURL: "https://pinvite-app.firebaseio.com",
  projectId: "pinvite-app"
  // storageBucket: "pinvite-app.appspot.com",
  // messagingSenderId: "474917508837"
});

export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerFacebook = new firebase.auth.FacebookAuthProvider();
export const providerTwitter = new firebase.auth.TwitterAuthProvider();
export const db = firebase.firestore(); //firestroeを使う場合
export default firebase;