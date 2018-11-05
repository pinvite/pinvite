import React from 'react'
import {ButtonTwitter} from '../components/Atoms/Button'
import {Header1} from '../components/style-typography'
import Layout from '../components/layout'
import {withAuthStatusContext} from '../context/HOC'
import {LayoutBLockCenter} from './styled'
import { navigateTo } from 'gatsby-link';

class IndexPage extends React.Component {

  componentDidMount() {
    if (this.props.context.result) navigateTo('/invite/')
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.context.result) navigateTo('/invite/')
  }

  render () {
    console.log(this.props.context)
    return (
      <Layout>
        <Header1 center>勉強会に来てくれる人を募集しよう</Header1>
        <LayoutBLockCenter>
          <ButtonTwitter onClick={this.props.context.handleLogin}>Twitterでログイン</ButtonTwitter>
        </LayoutBLockCenter>
      </Layout>
    )
  }
}

export default withAuthStatusContext(IndexPage)
