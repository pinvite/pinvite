import React from 'react'
import firebase, { providerTwitter } from '../../utils/firebase';

const AuthStatusContext = React.createContext();

export class AuthStatusProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {result: null};
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin = () => {
    console.log("click login")
    firebase.auth().signInWithPopup(providerTwitter).then(result => {
      if (result.credential) {
        this.setState({result});
      }
    }).catch(error => {
      this.setState({error: error})
    });
  }

  render(){
    console.log(this.state)
    return(
      <AuthStatusContext.Provider
        value={{
          result: this.state.result || {test: null},
          handleLogin: () => this.handleLogin()
        }}>
        {this.props.children}
      </AuthStatusContext.Provider>
    );
  }
};

export const AuthStatusConsumer = AuthStatusContext.Consumer;