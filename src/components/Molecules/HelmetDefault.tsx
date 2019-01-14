import React from 'react'
import Helmet from 'react-helmet'
import MuiTheme from '../../theme/MuiTheme'

const HelmetDefault: React.SFC<{}> = props => (
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
  </Helmet>
)

export default HelmetDefault
