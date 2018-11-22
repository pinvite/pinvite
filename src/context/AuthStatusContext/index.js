import React from 'react'
import firebase, { providerTwitter } from '../../utils/firebase';
import isequal from 'lodash.isequal'

const AuthStatusContext = React.createContext();

export class AuthStatusProvider extends React.Component {
  constructor(props){
   super(props);
    this.state = {
      result: (typeof window !== 'undefined' && JSON.parse(localStorage.getItem('result'))) || null
    };
    this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken().then(idToken => {
          this.setState({idToken: idToken});
        }).catch(error => {
          this.setState({error: error})
        });
      } else {
        this.setState({error: "login failed - no user found"})
      }
    });
  }

  handleLogin = () => {
    firebase.auth().signInWithPopup(providerTwitter).then(result => {
      if (result.credential) {
        this.setState({result: result});
        if(typeof window !== 'undefined' && !isequal(result, localStorage.result)) {
          localStorage.setItem('result', JSON.stringify(result))
        }
      }
    }).catch(error => {
      this.setState({error: error})
    });
  }

  render(){
    return(
      <AuthStatusContext.Provider
        value={{
          result: this.state.result,
          idToken: this.state.idToken,
          handleLogin: () => this.handleLogin()
        }}>
        {this.props.children}
      </AuthStatusContext.Provider>
    );
  }
};

export const AuthStatusConsumer = AuthStatusContext.Consumer;