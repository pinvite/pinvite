import React from 'react'
import {ButtonTwitter} from '../components/Atoms/Button'
import ApplicationBar from '../components/Molecules/ApplicationBar'
import {Header1} from '../components/style-typography'
import Layout from '../components/layout'
import {withAuthStatusContext} from '../context/HOC'
import {LayoutBLockCenter} from '../components/styled'

class IndexPage extends React.Component {

  render () {
    console.log(this.props.context)
    return (
      <Layout>
        <ApplicationBar />
        <Header1 center>勉強会に来てくれる人を募集しよう</Header1>
        <LayoutBLockCenter>
          <ButtonTwitter onClick={this.props.context.handleLogin}>Twitterでログイン</ButtonTwitter>
        </LayoutBLockCenter>
      </Layout>
    )
  }
}

export default withAuthStatusContext(IndexPage)
