import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles';

import ApplicationBar from '../../components/Molecules/ApplicationBar'
import InviteSamplePaper from '../../components/Molecules/InviteSamplePaper'
import {CallToActionTop, CallToActionBottom} from '../../components/Molecules/CallToAction'
import IssueListPaper from '../../components/Molecules/IssueListPaper'
import Theme from '../../theme/Theme'

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
  <MuiThemeProvider theme={Theme}>
    <Helmet>
      <title>pinvite</title>
      <link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      {
        // !!! Do not add anything else other than body's margin below !!!
        // All CSS should live beside React components, but <body>'s margin is the only exception as it is not a React component.
        // By default the <body> element has margin, which we want to disable.
      }
      <style type="text/css">{`
        body { 
          margin: 0;
        }
      `}</style>
    </Helmet>
    <Container>
      <ApplicationBar />
      <CallToActionTop
        description={props.firstCallToActionText}
        buttonText={props.buttonText}
      />
      <InviteSamplePaper />
      <IssueListPaper />
      <CallToActionBottom
        description={props.secondCallToActionText}
        buttonText={props.buttonText}
      />
    </Container>
  </MuiThemeProvider>

export default Index
