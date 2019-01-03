/// <reference types="cypress" />

import firebase from 'firebase/app'
import 'firebase/auth'
import config from '../../src/config/firebase/config'

firebase.initializeApp(config)

export function login() {
  const twitterAccessToken = Cypress.env('TWITTER_ACCESS_TOKEN')  
  if(!twitterAccessToken) {
    throw new Error('Environment variable TWITTER_ACCESS_TOKEN should is missing')
  }

  const twitterAccessTokenSecret = Cypress.env('TWITTER_ACCESS_TOKEN_SECRET')
  if(!twitterAccessTokenSecret) {
    throw new Error('Environment variable TWITTER_ACCESS_TOKEN_SECRET is missing')
  }

  const credential = firebase.auth.TwitterAuthProvider.credential(
    twitterAccessToken,
    twitterAccessTokenSecret
  )
  firebase.auth().signInAndRetrieveDataWithCredential(credential)
}
