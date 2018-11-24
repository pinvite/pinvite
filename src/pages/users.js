import React from 'react'
import { Router } from "@reach/router";
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import { firestore } from '../utils/firebase'

let Home = ({children}) =>
 <div>
   users
   {children}
 </div>

let User = ({userId, children}) =>
 <div>
   user: {userId}
   {children} 
 </div>

let Invites = ({children}) =>
 <div>
   invites
   {children} 
 </div>

class Invite extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      twitterCard:    '*|twitter:card|*' ,
      twitterSite:    '*|twitter:site|*',
      twitterCreator: '*|twitter:creator|*',
      ogUrl:          '*|og:url|*',
      ogTitle:        '*|og:title|*',
      ogDescription:  '*|og:description|*',
      ogImage:        '*|og:image|*'
    };
  }

  componentDidMount(){
    firestore
      .collection('users').doc(this.props.userId)
      .collection('invites').doc(this.props.inviteId).get().then(invitationDoc => {
        if(!invitationDoc.exists){
          console.log('No such invitationNo such invitationNo such invitationNo such invitation')
        } else {
          this.setState({
            twitterCard:    invitationDoc.data().ogp['twitter:card'],
            twitterSite:    invitationDoc.data().ogp['twitter:site'],
            twitterCreator: invitationDoc.data().ogp['twitter:creator'],
            ogUrl:          invitationDoc.data().ogp['og:url'],
            ogTitle:        invitationDoc.data().ogp['og:title'],
            ogDescription:  invitationDoc.data().ogp['og:description'],
            ogImage:        invitationDoc.data().ogp['og:image']      
          });
        }
      }).catch(err => {
        console.log(err)
      });
  }

  render(){
    return(
      <div>
        invite: {this.props.inviteId}
        <Helmet
          meta={[
            { name: 'twitter:card',    content: this.state.twitterCard },
            { name: 'twitter:site',    content: this.state.twitterSite },
            { name: 'twitter:creator', content: this.state.twitterCreator },
            { name: 'og:url',          content: this.state.ogUrl },
            { name: 'og:title',        content: this.state.ogTitle },
            { name: 'og:description',  content: this.state.ogDescription },
            { name: 'og:image',        content: this.state.ogImage },
            { name: 'title',           content: this.state.ogTitle }
          ]}
        />
        {this.props.children}
      </div>
    )
  }
}

const Users = () => (
  <Layout>
    {/* These *|something|* values should be replaced by server-side (serverless) Firebase Functions*/}
    <Helmet
      meta={[
        { name: 'twitter:card',    content: '*|twitter:card|*' },
        { name: 'twitter:site',    content: '*|twitter:site|*' },
        { name: 'twitter:creator', content: '*|twitter:creator|*' },
        { name: 'og:url',          content: '*|og:url|*' },
        { name: 'og:title',        content: '*|og:title|*' },
        { name: 'og:description',  content: '*|og:description|*' },
        { name: 'og:image',        content: '*|og:image|*' },
        { name: 'title',           content: '*|title|*' }
      ]}
    />
    <Router>
      {
        // (https://www.gatsbyjs.org/docs/authentication-tutorial/#creating-client-only-routes)
        // Note that in gatsby, client-only routing requires @reach/router and either of the below:
        //   - gatsby-node.js to implement `onCreatePage`
        //   - gatsby-plugin-create-client-paths 
      }
      <Home path="users">
        <User path=":userId">
          <Invites path="invites">
            <Invite path=":inviteId">
            </Invite>
          </Invites>
        </User>
      </Home>
    </Router>
  </Layout>
)

export default Users
