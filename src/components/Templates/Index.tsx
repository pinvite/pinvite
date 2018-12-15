import { MuiThemeProvider } from '@material-ui/core/styles'
import React, {Fragment} from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import {CallToActionBottom, CallToActionTop} from '../../components/Molecules/CallToAction'
import ConcernList from '../../components/Molecules/ConcernList'
import MuiTheme from '../../theme/MuiTheme'
import ApplicationBar from '../Molecules/ApplicationBar'
import InvitationSample from '../Molecules/InvitationSample'

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

const CallToActionTopStyled　= styled(CallToActionTop)`
&& {
  margin-bottom: 80px;
}
`

const CallToActionBottomStyled = styled(CallToActionBottom)`
&& {
  margin-bottom: 80px;
}
`

const InvitationSampleStyled = styled(InvitationSample)`
&& {
  margin-bottom: 80px;
}
`

const ConcernListStyled = styled(ConcernList)`
&& {
  margin-bottom: 80px;
}
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
      <ApplicationBar />
      <Container>
        <CallToActionTopStyled
          description={props.firstCallToActionText}
          buttonText={props.buttonText}
        />
        <InvitationSampleStyled
          captionText={props.sampleCaptionText}
        />
        <ConcernListStyled
          captionText={props.concernCaptionText}
          concernText1={props.concernText1}
          concernText2={props.concernText2}
          concernText3={props.concernText3}
        />
        <CallToActionBottomStyled
          description={props.secondCallToActionText}
          buttonText={props.buttonText}
        />
      </Container>
    </MuiThemeProvider>
  </Fragment>

export default Index
