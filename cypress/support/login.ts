/// <reference types="cypress" />

export function login() {
  if(Cypress.env('TWITTER_ACCESS_TOKEN')) {
    localStorage.setItem('twitter.access_token', Cypress.env('TWITTER_ACCESS_TOKEN'))
  } else {
    throw new Error('Environment variable TWITTER_ACCESS_TOKEN should is missing')
  }

  if(Cypress.env('TWITTER_ACCESS_TOKEN_SECRET')) {
    localStorage.setItem('twitter.access_token_secret', Cypress.env('TWITTER_ACCESS_TOKEN_SECRET'))
  } else {
    throw new Error('Environment variable TWITTER_ACCESS_TOKEN_SECRET is missing')
  }

  const firebaseRefreshToken = Cypress.env('FIREBASE_REFRESH_TOKEN')
  const firebaseApiKey = Cypress.env('FIREBASE_API_KEY')
  if(firebaseRefreshToken !== undefined && firebaseApiKey !== undefined) {
    // https://firebase.google.com/docs/reference/rest/auth/#section-refresh-token
    cy.request({
      method: 'POST',
      url: 'https://securetoken.googleapis.com/v1/token?key=' + firebaseApiKey,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=refresh_token&refresh_token=' + firebaseRefreshToken
    }).then(response => {
      if(response.body.id_token) {
        localStorage.setItem('firebase.auth.id_token', response.body.id_token)
      }
      else {
        throw new Error('Authentication via https://securetoken.googleapis.com/v1/token did not return Firebase ID token')
      }
    })
  } else {
    throw new Error('Environment variable FIREBASE_REFRESH_TOKEN or FIREBASE_API_KEY is missing')
  }
}
