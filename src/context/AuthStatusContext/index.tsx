import React from 'react'
import firebase, { firebaseLogin, makeSureTwitterUserInfoStored, UserInfo } from '../../utils/firebase'

enum LoginStatus {
  NotLoggedIn,
  LoggedIn,
  ReadyToTweet,
  LoginFailure,
}

interface AuthState {
  loginStatus: LoginStatus,
  userInfo?: UserInfo,
  errorMessage?: string,
}

interface AuthContextValues {
  handleLogin: () => void,
  loginStatus: LoginStatus,
  userInfo?: UserInfo,
  errorMessage?: string,
}

export const AuthStatusContext = React.createContext<AuthContextValues>(undefined as any)

export class AuthStatusProvider extends React.Component<{}, AuthState> {
  constructor(props: any) {
    super(props)
    this.state = {loginStatus: LoginStatus.NotLoggedIn, errorMessage: ''}
    this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount() {
    makeSureTwitterUserInfoStored().then((userInfo) => {
      this.setState({loginStatus: LoginStatus.ReadyToTweet, userInfo})
    }).catch((error) => {
      this.setState({loginStatus: LoginStatus.LoginFailure})
    })
  }

  handleLogin = () => {
    firebaseLogin().then(() => {
      this.setState({loginStatus: LoginStatus.LoggedIn})
    }).catch((error) => {
      this.setState({loginStatus: LoginStatus.LoginFailure})
    })
  }

  render() {
    return(
      <AuthStatusContext.Provider
        value={{
          errorMessage: this.state.errorMessage,
          handleLogin: this.handleLogin,
          loginStatus: this.state.loginStatus,
          userInfo: this.state.userInfo,
        }}>
        {this.props.children}
      </AuthStatusContext.Provider>
    )
  }
}
