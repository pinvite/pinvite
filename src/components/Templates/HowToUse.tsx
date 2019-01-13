import { MuiThemeProvider } from '@material-ui/core/styles'
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { AuthStatusProvider } from '../../context/AuthStatusContext'
import MuiTheme from '../../theme/MuiTheme'
import ApplicationBar from '../Molecules/ApplicationBar'
import HowToStep, { HowToStepProps } from '../Molecules/HowToStep'

const Container = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

export interface HowToUseProps {
  steps: HowToStepProps[]
}

const HowToStepStyled = styled(HowToStep as React.SFC<HowToStepProps>)`
  && {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`

const HotToUse: React.SFC<HowToUseProps> = props => (
  <Fragment>
    <Helmet>
      <title>pinvite</title>
      <link
        href="https://fonts.googleapis.com/css?family=Fredoka+One"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <style type="text/css">{// !!! Do not add anything else other than body's margin and background-color below !!!
      // All CSS should live inside React components.
      // but <body>'s margin is the only exception as it is not a React component.
      // By default the <body> element has margin, which we want to disable.
      `body {
          margin: 0;
          background-color: ${MuiTheme.palette.background.default};
        }`}</style>
    </Helmet>
    <MuiThemeProvider theme={MuiTheme}>
      <AuthStatusProvider>
        <ApplicationBar />
        <Container>
          {props.steps.map(howToStepProps => (
            <HowToStepStyled
              title={howToStepProps.title}
              imgFluid={howToStepProps.imgFluid}
              instruction={howToStepProps.instruction}
            />
          ))}
        </Container>
      </AuthStatusProvider>
    </MuiThemeProvider>
  </Fragment>
)

export default HotToUse
