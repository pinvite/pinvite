import React, {Fragment} from 'react'
import ApplicationBar from '../components/Molecules/ApplicationBar'
import Index from '../components/Templates/Index'
import {withAuthStatusContext} from '../context/HOC'

const IndexPage = () =>
  <Index
    firstCallToActionText={<Fragment>Twitterで勉強会の講師を<br/>募集しましょう</Fragment>}
    secondCallToActionText={<Fragment>勉強会を開きましょう！<br/>pinviteがTwitterでの講師探しをお手伝いします</Fragment>}
    buttonText='Twitterで登録'
  />

export default withAuthStatusContext(IndexPage)
