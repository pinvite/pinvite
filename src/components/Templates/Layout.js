import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 600px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
`

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Helmet>
        <title>pinvite</title>
        <link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Helmet>
      <Container>
        {children}
      </Container>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
