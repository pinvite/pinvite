import { MuiThemeProvider } from '@material-ui/core/styles'
import { RouteComponentProps, Router } from '@reach/router'
import React from 'react'
import styled from 'styled-components'
import { AuthStatusProvider } from '../../context/AuthStatusContext'
import { UninitializedOgpValues } from '../../domain/OgpValues'
import MuiTheme from '../../theme/MuiTheme'
import OgpMetaTags from '../Atoms/OgpMetaTags'
import HelmetDefault from '../Molecules/HelmetDefault'
import ApplicationBar from '../Organisms/ApplicationBar'
import Invitation, { InvitationProps } from '../Organisms/Invitation'

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

const InvitationContainer: React.SFC<InvitationContainerProps> = props => {
  if (props.firebaseUserId != null && props.invitationId != null) {
    return (
      <Invitation
        firebaseUserId={props.firebaseUserId}
        invitationId={props.invitationId}
        previewImageURL={props.previewImageURL}
      />
    )
  } else {
    return <React.Fragment />
  }
}

export interface UsersProps {
  previewImageURL: string
}

const Users: React.SFC<UsersProps> = props => (
  <React.Fragment>
    <HelmetDefault />
    <style type="text/css">{// !!! Do not add anything else other than body's margin and background-color below !!!
    // All CSS should live inside React components.
    // but <body>'s margin is the only exception as it is not a React component.
    // By default the <body> element has margin, which we want to disable.
    `body {
          margin: 0;
          background-color: ${MuiTheme.palette.background.default};
        }`}</style>
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
  </React.Fragment>
)

export default Users
