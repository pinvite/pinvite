import isequal from 'lodash.isequal'
import React from 'react'
import firebase, { firebaseLogin, makeSureTwitterUserInfoStored, TwitterUserInfo } from '../../utils/firebase'

enum LoginStatus {
  NotLoggedIn,
  LoggedIn,
  ReadyToTweet,
  LoginFailure,
}

interface AuthState {
  loginStatus: LoginStatus,
  twitterUserInfo?: TwitterUserInfo
  errorMessage?: string
  idToken?: string
}

const AuthStatusContext = React.createContext<AuthState>({
  loginStatus: LoginStatus.NotLoggedIn,
})

export class AuthStatusProvider extends React.Component {
  constructor() {
    super({})
    this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount() {
    makeSureTwitterUserInfoStored().then((userInfo) => {
      this.setState({loginStatus: LoginStatus.ReadyToTweet, twitterUserInfo: userInfo})
    }).catch((error) => {
      this.setState({loginStatus: LoginStatus.LoginFailure})
    })
  }

  handleLogin = () => {
    firebaseLogin().then((twitterUserInfo) => {
      this.setState({loginStatus: LoginStatus.LoggedIn, twitterUserInfo})
    }).catch((error) => {
      this.setState({loginStatus: LoginStatus.LoginFailure})
    })
  }

  render() {
    return(
      <div />
    )
  }
}

export const AuthStatusConsumer = AuthStatusContext.Consumer
