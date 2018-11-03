import React from 'react'
import firebase, { providerTwitter } from '../../utils/firebase';
import isequal from 'lodash.isequal'

const AuthStatusContext = React.createContext();

export class AuthStatusProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      result: JSON.parse(localStorage.getItem('result')) || null
    };
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin = () => {
    firebase.auth().signInWithPopup(providerTwitter).then(result => {
      if (result.credential) {
        this.setState({result: result});
        if(!isequal(result, localStorage.result)) {
          localStorage.setItem('result', JSON.stringify(result))
        }
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
          result: this.state.result,
          handleLogin: () => this.handleLogin()
        }}>
        {this.props.children}
      </AuthStatusContext.Provider>
    );
  }
};

export const AuthStatusConsumer = AuthStatusContext.Consumer;