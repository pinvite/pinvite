import React from 'react'
import ApplicationBar from '../components/Molecules/ApplicationBar'
import Index from '../components/Templates/Index'
import {withAuthStatusContext} from '../context/HOC'

const IndexPage = () =>
  <Index
    firstCallToActionText='Twitterで勉強会の講師を募集しましょう'
    secondCallToActionText='Twitterで勉強会の講師を募集しましょう'
    buttonText='Twitterで登録'
  />

export default withAuthStatusContext(IndexPage)
