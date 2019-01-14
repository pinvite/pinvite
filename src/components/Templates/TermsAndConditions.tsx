import { MuiThemeProvider } from '@material-ui/core/styles'
import React, { Fragment } from 'react'
import styled from 'styled-components'

import { AuthStatusProvider } from '../../context/AuthStatusContext'
import MuiTheme from '../../theme/MuiTheme'
import HelmetDefault from '../Molecules/HelmetDefault'
import ApplicationBar from '../Organisms/ApplicationBar'
import TermsAndConditionList from '../Organisms/TermsAndConditionList'

const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const TermsAndConditions: React.SFC<{}> = props => (
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
          <TermsAndConditionList />
        </Container>
      </AuthStatusProvider>
    </MuiThemeProvider>
  </React.Fragment>
)

export default TermsAndConditions
