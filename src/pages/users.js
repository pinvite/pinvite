import React from 'react'
import { Router } from "@reach/router";
import Layout from '../components/layout'
import Helmet from 'react-helmet'

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

let Invite = ({inviteId, children}) =>
 <div>
   invite: {inviteId}
   {/* These *|something|* values should be replaced by server-side (serverless) Firebase Functions */}
   <Helmet
      meta={[
        { name: 'twitter:card',    content: '*|twitter:card|*' },
        { name: 'twitter:site',    content: '*|twitter:site|*' },
        { name: 'twitter:creator', content: '*|twitter:creator|*' },
        { name: 'og:url',          content: '*|og:url|*' },
        { name: 'og:title',        content: '*|og:title|*' },
        { name: 'og:description',  content: '*|og:description|*' },
        { name: 'og:url',          content: '*|og:url|*' },
        { name: 'title',           content: '*|title|*' }
      ]}
    />
   {children}
 </div>

const Users = () => (
  <Layout>
    {
      // (https://www.gatsbyjs.org/docs/authentication-tutorial/#creating-client-only-routes)
      // Note that in gatsby, client-only routing requires @reach/router and either of the below:
      //   - gatsby-node.js to implement `onCreatePage`
      //   - gatsby-plugin-create-client-paths 
    }
    <Router>
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
