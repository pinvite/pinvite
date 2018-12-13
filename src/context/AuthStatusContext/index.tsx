import isequal from 'lodash.isequal'
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
  userInfo: UserInfo
}

interface AuthContextProps {
  handleLogin: () => void
}

const AuthStatusContext = React.createContext<AuthContextProps>(undefined as any)

export class AuthStatusProvider extends React.Component<AuthContextProps, AuthState> {
  constructor(props: AuthContextProps) {
    super(props)
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
          handleLogin: this.handleLogin,
          // userInfo: this.state.userInfo,
        }}>
        {this.props.children}
      </AuthStatusContext.Provider>
    )
  }
}