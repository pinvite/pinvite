import React from 'react'
import { Link } from 'gatsby'
import {ButtonTwitter} from '../components/Atoms/Button'
import {Header1} from '../components/style-typography'
import Layout from '../components/layout'
import firebase, { providerTwitter } from '../utils/firebase';

class IndexPage extends React.Component {

  handleLogin = () => {
    console.log("clicked")
    firebase.auth().signInWithPopup(providerTwitter).then(result => {
      console.log(result);
      if (result.credential) {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        const token = result.credential.accessToken;
        const secret = result.credential.secret;
        // ...
      }
      // The signed-in user info.
      const user = result.user;
      console.log(user)
      //TODO: ex. storeに送信, DB保存,...
    }).catch(error => {
      console.log("error")
      console.log(error);
    });
  }

  render () {
    return (
      <Layout>
        <Header1 center>勉強会に来てくれる人を募集しよう</Header1>
        <ButtonTwitter onClick={this.handleLogin}>Twitter</ButtonTwitter>
      </Layout>
    )
  }
}

export default IndexPage