## Wesite 
https://pinvite.fun (backed up by: https://pinvite-app.firebaseapp.com/)

## Firebase
We are hosting the website at Firebase, as it provides Firebase Authentication which can be integrated with Twitter login.

### Deploy to Firebase

- `npm install -g firebase-tools` //only for the first time to install Fireabase CLI
- `firebase login` //Your Google acct needs to be added to the pinvite Firebase project first. Talk to the project admin.
- also `git push origin master`

Will add CI for auto deploy later.

### Cloud Functions for Firebase

We are using [Cloud Functions for Firebase](https://firebase.google.com/docs/functions/?gclid=Cj0KCQiA28nfBRCDARIsANc5BFBlnGQ6qGJD6xHfpJSOWLwKeqFxLdmBRgbiuUW7eJFVJROwHxBItp8aAlLjEALw_wcB) for the server-side (serverless) processing.

## Twitter application

Needed to provide Twitter login capabilities for users.

https://developer.twitter.com/en/apps

Ask the project admin to get the access to the Twitter Developer console.
Use https://twitter.com/orgpinvite.

## Figma

Figma provides good collaboration features for designers and engineers. Visit https://www.figma.com/files/project/925165/pinvite to see design materials.

## Dropbox paper

Project documentation [here](https://paper.dropbox.com/doc/pinvite--AOY9I7GCHKeb0MiguWxrivckAQ-p7UQqhTQwPmuiylVsIPYe).

## Slack

benkyoukaitalk.slack.com

## Development

After git cloning this repository:

```
> gatsby develop
```

This brings up web UI without the backend.

If you want to locally test the web UI with the backend on Cloud Functions for Firebase, you should do the following

```
> gatsby build
> firebase serve
```

The first command `gatsby build` will produce output to the `public` directory, then `firebase serve` brings up the local firebase hosting and firebase functions.
