import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import ApplicationBar from '../../components/Molecules/ApplicationBar'
import InviteSamplePaper from '../../components/Molecules/InviteSamplePaper'
import CallToAction from '../../components/Molecules/CallToAction'
import IssueListPaper from '../../components/Molecules/IssueListPaper'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: scroll;
`

const Container = styled.div`
  max-width: 480px;
`

export interface IndexProps {
  firstCallToActionText: string,
  secondCallToActionText: string,
  buttonText: string
}

const Index: React.SFC<IndexProps> = (props) =>
  <Fragment>
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
    <Wrapper>
      <Container>
        <ApplicationBar />
        <CallToAction
          description={props.firstCallToActionText}
          buttonText={props.buttonText}
        />
        <InviteSamplePaper />
        <IssueListPaper />
        <CallToAction
          description={props.secondCallToActionText}
          buttonText={props.buttonText}
        />
      </Container>
    </Wrapper>
  </Fragment>

export default Index
