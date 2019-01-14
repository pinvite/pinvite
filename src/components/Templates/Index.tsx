import { MuiThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import styled from 'styled-components'

import { AuthStatusProvider } from '../../context/AuthStatusContext'
import MuiTheme from '../../theme/MuiTheme'
import HelmetDefault from '../Molecules/HelmetDefault'
import ApplicationBar from '../Organisms/ApplicationBar'
import LandingContents from '../Organisms/LandingContents'
import OgpMetaTags from '../Atoms/OgpMetaTags';

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
          <OgpMetaTags 
            twitterCard="summary_large_image"
            twitterSite="orgpinvite"
            twitterCreator="orgpinvite"
            ogURL="https://pinvite.fun"
            ogTitle="pinvite"
            ogDescription="Twitterを使って外部エンジニアを社内勉強会に呼びましょう！"
            ogImage="https://res.cloudinary.com/pinvite/image/upload/c_fit,g_north_west,h_400,l_text:NotoSansJP-Black.otf_60_left:%28%25E6%258A%2595%25E7%25A8%25BF%25E4%25BE%258B%29%2520gatsby.js%25E3%2582%2592%25E4%25BD%25BF%25E3%2581%25A3%25E3%2581%25A6%25E5%25BC%258A%25E7%25A4%25BE%25E3%2582%25B3%25E3%2583%25BC%25E3%2583%259D%25E3%2583%25AC%25E3%2583%25BC%25E3%2583%2588%25E3%2582%25B5%25E3%2582%25A4%25E3%2583%2588%25E3%2582%2592PWA%25E5%258C%2596%25E3%2581%2597%25E3%2581%25BE%25E3%2581%2599%25E3%2580%2582%25E3%2581%259D%25E3%2581%2593%25E3%2581%25A7gatsby.js%25E5%258B%2589%25E5%25BC%25B7%25E4%25BC%259A%25E3%2581%25AE%25E8%25AC%259B%25E5%25B8%25AB%25E3%2582%2592%25E3%2581%2597%25E3%2581%25A6%25E3%2581%258F%25E3%2582%258C%25E3%2582%258B%25E4%25BA%25BA%25E3%2582%2592%25E5%258B%259F%25E9%259B%2586%25EF%25BC%2581,w_1000,x_100,y_50/c_fit,g_north_west,h_100,l_text:NotoSansJP-Black.otf_60_start:%25E5%258B%2589%25E5%25BC%25B7%25E4%25BC%259A%25E3%2581%25AE%25E3%2582%25AE%25E3%2583%25A3%25E3%2583%25A9:%252020000%2520%25E5%2586%2586,w_1000,x_100,y_400/c_fit,g_north_west,h_94,l_text:NotoSansJP-Black.otf_60_left:%25E5%258B%2589%25E5%25BC%25B7%25E4%25BC%259A%25E3%2581%25AE%25E6%2599%2582%25E9%2596%2593:%25202%2520%25E6%2599%2582%25E9%2596%2593,w_1000,x_100,y_500/background.png"
            title="pinvite"
          />
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
