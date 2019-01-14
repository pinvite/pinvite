import { MuiThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import styled from 'styled-components'

import { AuthStatusProvider } from '../../context/AuthStatusContext'
import MuiTheme from '../../theme/MuiTheme'
import HelmetDefault from '../Molecules/HelmetDefault'
import ApplicationBar from '../Organisms/ApplicationBar'
import LandingContents from '../Organisms/LandingContents'

export interface IndexProps {
  sampleImageSrc: string
  firstCallToActionText: React.ReactNode
  secondCallToActionText: React.ReactNode
  registerButtonText: string
  jumpToButtonText: string
  sampleCaptionText: string
  concernCaptionText: string
  concernText1: string
  concernText2: string
  concernText3: string
}

const Container = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const Index: React.SFC<IndexProps> = props => (
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
          <LandingContents
            sampleImageSrc={props.sampleImageSrc}
            firstCallToActionText={props.firstCallToActionText}
            secondCallToActionText={props.secondCallToActionText}
            registerButtonText={props.registerButtonText}
            jumpToButtonText={props.jumpToButtonText}
            sampleCaptionText={props.sampleCaptionText}
            concernCaptionText={props.concernCaptionText}
            concernText1={props.concernText1}
            concernText2={props.concernText2}
            concernText3={props.concernText3}
          />
        </Container>
      </AuthStatusProvider>
    </MuiThemeProvider>
  </React.Fragment>
)

export default Index
