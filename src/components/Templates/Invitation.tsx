import React, {Fragment} from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import ApplicationBar from '../Molecules/ApplicationBar'
import Invitation from '../Organisms/Invitation'
import MuiTheme from '../../theme/MuiTheme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { AuthStatusProvider } from '../../context/AuthStatusContext'

export interface InviteProps {
  twitterCard: string
  twitterSite: string
  twitterCreator: string
  ogUrl: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  captionText: string
  detailsText: string
}

const Container = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const Invite: React.SFC<InviteProps> = (props) =>
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
          <Invitation
            twitterCard={props.twitterCard}
            twitterSite={props.twitterSite}
            twitterCreator={props.twitterCreator}
            ogUrl={props.ogUrl}
            ogTitle={props.ogTitle}
            ogDescription={props.ogDescription}
            ogImage={props.ogImage}
            captionText={props.captionText}
            detailsText={props.detailsText}
          />
        </Container>
      </AuthStatusProvider>
    </MuiThemeProvider>
  </Fragment>


export default Invite
