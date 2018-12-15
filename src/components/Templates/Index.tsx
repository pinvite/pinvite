import { MuiThemeProvider } from '@material-ui/core/styles'
import React, {Fragment} from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import MuiTheme from '../../theme/MuiTheme'
import ApplicationBar from '../Molecules/ApplicationBar'
import LandingContents from '../Organisms/LandingContents'
import {AuthStatusProvider} from '../../context/AuthStatusContext'

export interface IndexProps {
  firstCallToActionText: React.ReactNode,
  secondCallToActionText: string,
  buttonText: string,
  sampleCaptionText: string,
  concernCaptionText: string,
  concernText1: string,
  concernText2: string,
  concernText3: string,
}

const Container = styled.div`
  max-width: 600px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
`

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
      <AuthStatusProvider>
        <ApplicationBar />
        <Container>
          <LandingContents
            firstCallToActionText={props.firstCallToActionText}
            secondCallToActionText={props.secondCallToActionText}
            buttonText={props.buttonText}
            sampleCaptionText={props.sampleCaptionText}
            concernCaptionText={props.concernCaptionText}
            concernText1={props.concernText1}
            concernText2={props.concernText2}
            concernText3={props.concernText3}
          />
        </Container>
      </AuthStatusProvider>
    </MuiThemeProvider>
  </Fragment>

export default Index
