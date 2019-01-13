import { MuiThemeProvider } from '@material-ui/core/styles'
import Img, { FluidObject } from 'gatsby-image'
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import {
  Paper,
} from '@material-ui/core'
import { PaperProps } from '@material-ui/core/Paper'
import { AuthStatusProvider } from '../../context/AuthStatusContext'
import MuiTheme from '../../theme/MuiTheme'
import { Body2Left, H6Left } from '../Atoms/Description'
import ApplicationBar from '../Molecules/ApplicationBar'

const Container = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const PaperStyled = styled(Paper as React.SFC<PaperProps>)`
  && {
    background-color: ${MuiTheme.palette.secondary.dark};
    margin-bottom: 40px;
    padding 8px;
  }
`

export interface HowToUseProps {
  fluid1: FluidObject
  fluid2: FluidObject
}

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
          <PaperStyled elevation={0}>
            <H6Left description="1. Twitterアカウントとの連携" />
            <div style={{padding: "8px"}}>
              <Img fluid={props.fluid1} />
            </div>
            <Body2Left
              description={
              `トップページの「TWITTERで登録」ボタン下にある注意事項をよく読み、
              「TWITTERで登録」ボタンを押してください。TwitterとのOAuth連携が始まります。`
            }
            />
          </PaperStyled>
          <PaperStyled elevation={0}>
            <H6Left description="2. Twitterアカウントとの連携後" />
            <div style={{padding: "8px"}}>
              <Img fluid={props.fluid2} />
            </div>
            <Body2Left
              description={`
              TwitterとのOAuth連携が無事完了したら、トップページに「募集内容を入力」ボタンが現れますので、
              そのボタンを押してください。
            `}
            />
          </PaperStyled>
        </Container>
      </AuthStatusProvider>
    </MuiThemeProvider>
  </Fragment>
)

export default HotToUse
