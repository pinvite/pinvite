export function login() {
  if(Cypress.env('TWITTER_ACCESS_TOKEN')) {
    localStorage.setItem('twitter.access_token', Cypress.env('TWITTER_ACCESS_TOKEN'))
  } else {
    throw new Error('Environment variable TWITTER_ACCESS_TOKEN should be set to test login behavior')
  }
  if(Cypress.env('TWITTER_ACCESS_TOKEN_SECRET')) {
    localStorage.setItem('twitter.access_token_secret', Cypress.env('TWITTER_ACCESS_TOKEN_SECRET'))
  } else {
    throw new Error('Environment variable TWITTER_ACCESS_TOKEN_SECRET should be set to test login behavior')
  }
}
