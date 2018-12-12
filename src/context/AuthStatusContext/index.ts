import isequal from 'lodash.isequal'
import React from 'react'
import firebase, { firestore, providerTwitter } from '../../utils/firebase'

const AuthStatusContext = React.createContext()

export class AuthStatusProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: (typeof window !== 'undefined' && JSON.parse(localStorage.getItem('result'))) || null,
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((idToken) => {
          this.setState({idToken})
        }).catch((error) => {
          this.setState({error})
        })

        firestore.collection('users').doc(user.uid).get().then((userDoc) => {
          if (!userDoc.exists
            || !userDoc.data().twitter
            || !userDoc.data().twitter.twitter
            || !userDoc.data().twitter.access_token
            || !userDoc.data().twitter.secret
          ) {
            firestore.collection('users').doc(user.uid).set({
              twitter: {
                user_id: this.state.result.additionalUserInfo.profile.screen_name,
                access_token: this.state.result.credential.accessToken,
                secret: this.state.result.credential.secret,
              },
            })
          }
        }).catch((error) => {
          // This could be due to `Missing or insufficient permissions` from Firestore rules.
          this.setState({error})
        })
      } else {
        this.setState({error: 'login failed - no user found'})
      }
    })
  }

  handleLogin = () => {
    firebase.auth().signInWithPopup(providerTwitter).then((result) => {
      if (result.credential) {
        this.setState({result})
        if (typeof window !== 'undefined' && !isequal(result, localStorage.result)) {
          localStorage.setItem('result', JSON.stringify(result))
        }
      }
    }).catch((error) => {
      this.setState({error})
    })
  }

  render() {
    return(
      <AuthStatusContext.Provider
        value={{
          result: this.state.result,
          idToken: this.state.idToken,
          handleLogin: () => this.handleLogin()
        }}>
        {this.props.children}
      </AuthStatusContext.Provider>
    )
  }
}

export const AuthStatusConsumer = AuthStatusContext.Consumer
