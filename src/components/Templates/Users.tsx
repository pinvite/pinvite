import React, {Fragment} from 'react'
import Helmet from 'react-helmet'
import { Router, RouteComponentProps } from "@reach/router";
import styled from 'styled-components'
import ApplicationBar from '../Molecules/ApplicationBar'
import Invitation, {InvitationProps} from '../Organisms/Invitation'
import MuiTheme from '../../theme/MuiTheme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { AuthStatusProvider } from '../../context/AuthStatusContext'
import OgpMetaTags from '../Atoms/OgpMetaTags';
import { UninitializedOgpValues } from '../../domain/OgpValues'

const Container = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

interface InvitationContainerProps extends RouteComponentProps {
  previewImageURL: string
  firebaseUserId?: string
  invitationId?: string
}

const InvitationContainer: React.SFC<InvitationContainerProps> = (props) => {
  if(props.firebaseUserId != null && props.invitationId != null) {
    return (
      <Invitation
        firebaseUserId={props.firebaseUserId}
        invitationId={props.invitationId}
        previewImageURL={props.previewImageURL}
      />
    )
  } else {
    return (
      <React.Fragment />
    )
  }
}

export interface UsersProps {
  previewImageURL: string
}

const Users: React.SFC<UsersProps> = (props) =>
  <Fragment>
    <Helmet>
      <title>pinvite</title>
      <link href="https://fonts.googleapis.com/css?family=Molle:400i" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <style type='text/css'>{
        // !!! Do not add anything else other than body's margin and background-color below !!!
        // All CSS should live inside React components.
        // but <body>'s margin is the only exception as it is not a React component.
        // By default the <body> element has margin, which we want to disable.
        `body {
          margin: 0;
          background-color: ${MuiTheme.palette.background.default};
        }`
      }</style>
    </Helmet>
    <MuiThemeProvider theme={MuiTheme}>
      <AuthStatusProvider>
        <ApplicationBar />
        <Container>
          <OgpMetaTags {...UninitializedOgpValues} />
          <Router>
            {
              // (https://www.gatsbyjs.org/docs/authentication-tutorial/#creating-client-only-routes)
              // Note that in gatsby, client-only routing requires @reach/router and either of the below:
              //   - gatsby-node.js to implement `onCreatePage`
              //   - gatsby-plugin-create-client-paths 
            }
            <InvitationContainer 
              path="/users/:firebaseUserId/invitations/:invitationId" 
              previewImageURL={props.previewImageURL}
            />
          </Router>
        </Container>
      </AuthStatusProvider>
    </MuiThemeProvider>
  </Fragment>


export default Users
