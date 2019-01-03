import React from 'react'
import firebase, {
  firebaseAuthStateChange,
  firebaseLogin,
  FirebaseUserInfo,
} from '../utils/firebase'

export enum LoginStatus {
  NotLoggedIn,
  LoggedIn,
  LoginFailure,
}

interface AuthState {
  loginStatus: LoginStatus
  userInfo?: FirebaseUserInfo
  errorMessage?: string
}

interface AuthContextValues {
  handleLogin: () => void
  loginStatus: LoginStatus
  userInfo?: FirebaseUserInfo
  errorMessage?: string
}

export const AuthStatusContext = React.createContext<AuthContextValues>(
  undefined as any
)

export class AuthStatusProvider extends React.Component<{}, AuthState> {
  constructor(props: any) {
    super(props)
    this.state = { loginStatus: LoginStatus.NotLoggedIn, errorMessage: '' }
    this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount() {
    firebaseAuthStateChange()
      .then(userInfo => {
        this.setState({ loginStatus: LoginStatus.LoggedIn, userInfo })
      })
      .catch(error => {
        this.setState({ loginStatus: LoginStatus.LoginFailure })
      })
  }

  handleLogin = () => {
    firebaseLogin()
      .then(userInfo => {
        this.setState({ loginStatus: LoginStatus.LoggedIn, userInfo })
      })
      .catch(error => {
        this.setState({ loginStatus: LoginStatus.LoginFailure })
      })
  }

  render() {
    return (
      <AuthStatusContext.Provider
        value={{
          errorMessage: this.state.errorMessage,
          handleLogin: this.handleLogin,
          loginStatus: this.state.loginStatus,
          userInfo: this.state.userInfo,
        }}
      >
        {this.props.children}
      </AuthStatusContext.Provider>
    )
  }
}
