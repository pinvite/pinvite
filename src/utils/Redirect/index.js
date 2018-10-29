import React, { Component } from 'react'
import { navigateTo } from 'gatsby-link';

class Redirect extends Component {
  componentDidMount() {
    navigateTo(this.props.to)
  }
  render () {
    return (<></>)
  }
}

export default Redirect