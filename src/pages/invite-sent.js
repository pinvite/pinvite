import React, { Component } from 'react'
import {Header2} from '../components/style-typography'

class InviteSentPage extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render () {
    return (
      <Header2>
        募集を投稿しました
      </Header2>
    )
  }
}

export default InviteSentPage
