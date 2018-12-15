import React, {Fragment} from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import ApplicationBar from '../Molecules/ApplicationBar'
import InviteBottom from '../Molecules/InviteBottom'
import MuiTheme from '../../theme/MuiTheme'
import { MuiThemeProvider } from '@material-ui/core/styles'

import {InputTitle, InputDetails, InputMoneyAmount, InputTime} from '../Atoms/Inputs'

export interface InviteProps {
  previewButtonText: string,
  gobackButtonText: string,
}

const Container = styled.div`
  max-width: 600px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
`

const Invite: React.SFC<InviteProps> = (props) =>
  <Fragment>
    <Helmet>
      <title>pinvite</title>
      <link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </Helmet>
    <MuiThemeProvider theme={MuiTheme}>
      <ApplicationBar />
      <Container>
        <InputTitle />
        <InputDetails />
        <InputMoneyAmount />
        <InputTime />
        <InviteBottom
          gobackButtonText={props.gobackButtonText}
          previewButtonText={props.previewButtonText}
        />
      </Container>
    </MuiThemeProvider>
  </Fragment>


export default Invite
