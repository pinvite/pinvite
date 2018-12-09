import { MuiThemeProvider } from '@material-ui/core/styles'
import React, {Fragment} from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import {CallToActionBottom, CallToActionTop} from '../../components/Molecules/CallToAction'
import IssueListPaper from '../../components/Molecules/IssueListPaper'
import MuiTheme from '../../theme/MuiTheme'
import ApplicationBar from '../Molecules/ApplicationBar'
import InvitationSample from '../Molecules/InvitationSample'

const Container = styled.div`
  max-width: 600px;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
`

export interface IndexProps {
  firstCallToActionText: React.ReactNode,
  secondCallToActionText: string,
  buttonText: string
}

const Index: React.SFC<IndexProps> = (props) =>
  <Fragment>
    <Helmet>
      <title>pinvite</title>
      <link href='https://fonts.googleapis.com/css?family=Fredoka+One' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Noto+Sans+JP' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
      <style type='text/css'>{
        // !!! Do not add anything else other than body's margin below !!!
        // All CSS should live beside React components,
        // but <body>'s margin is the only exception as it is not a React component.
        // By default the <body> element has margin, which we want to disable.
        `
        body {
          margin: 0;
        }
      `}</style>
    </Helmet>
    <MuiThemeProvider theme={MuiTheme}>
      <Container>
        <ApplicationBar />
        <CallToActionTop
          description={props.firstCallToActionText}
          buttonText={props.buttonText}
        />
        <InvitationSample />
        <IssueListPaper />
        <CallToActionBottom
          description={props.secondCallToActionText}
          buttonText={props.buttonText}
        />
      </Container>
    </MuiThemeProvider>
  </Fragment>

export default Index
