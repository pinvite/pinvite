import React, { Component } from 'react'
import {Header2} from '../components/style-typography'
import Layout from '../components/Templates/Layout'

class InviteSentPage extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render () {
    return (
      <Layout>
        <Header2 center>
          募集を投稿しました
        </Header2>
      </Layout>
    )
  }
}

export default InviteSentPage
