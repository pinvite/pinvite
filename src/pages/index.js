import React from 'react'
import {ButtonTwitter} from '../components/Atoms/Button'
import ApplicationBar from '../components/Molecules/ApplicationBar'
import {Header1} from '../components/style-typography'
import Layout from '../components/layout'
import InviteSamplePaper from '../components/Molecules/InviteSamplePaper'
import {withAuthStatusContext} from '../context/HOC'
import {LayoutBLockCenter} from '../components/styled'

class IndexPage extends React.Component {
  render () {
    return (
      <Layout>
        <ApplicationBar />
        <Header1 center>Twitterで勉強会の講師を<br/>募集しましょう</Header1>
        <LayoutBLockCenter>
          <ButtonTwitter onClick={this.props.context.handleLogin}>Twitterでログイン</ButtonTwitter>
        </LayoutBLockCenter>
        <InviteSamplePaper />
      </Layout>
    )
  }
}

export default withAuthStatusContext(IndexPage)
