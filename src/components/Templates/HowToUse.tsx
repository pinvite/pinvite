import { MuiThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import styled from 'styled-components'

import { AuthStatusProvider } from '../../context/AuthStatusContext'
import MuiTheme from '../../theme/MuiTheme'
import HelmetDefault from '../Molecules/HelmetDefault'
import HowToStep, { HowToStepProps } from '../Molecules/HowToStep'
import ApplicationBar from '../Organisms/ApplicationBar'

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
  </React.Fragment>
)

export default HotToUse
