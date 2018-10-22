import React from 'react'
import { Link } from 'gatsby'
import {ButtonTwitter} from '../components/Atoms/Button'
import {Header1} from '../components/style-typography'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Header1 center>勉強会に来てくれる人を募集しよう</Header1>
    <ButtonTwitter>Twitter</ButtonTwitter>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
