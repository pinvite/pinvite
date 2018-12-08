import React from 'react'
import {ButtonTwitter} from '../components/Atoms/Button'
import ApplicationBar from '../components/Molecules/ApplicationBar'
import Layout from '../components/Templates/Layout'
import InviteSamplePaper from '../components/Molecules/InviteSamplePaper'
import CallToAction from '../components/Molecules/CallToAction'
import IssueListPaper from '../components/Molecules/IssueListPaper'
import {withAuthStatusContext} from '../context/HOC'

class IndexPage extends React.Component {
  render () {
    return (
      <Layout>
        <ApplicationBar />
        <CallToAction
          description='Twitterで勉強会の講師を募集しましょう'
          buttonText='Twitterで登録'
        />
        <InviteSamplePaper />
        <IssueListPaper />
        <CallToAction
          description='勉強会を開きましょう！pinviteがTwitterでの講師探しをお手伝いします' 
          buttonText='Twitterで登録'
        />
      </Layout>
    )
  }
}

export default withAuthStatusContext(IndexPage)
