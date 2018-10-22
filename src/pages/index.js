import React from 'react'
import { Link } from 'gatsby'
import {ButtonTwitter} from '../components/Atoms/Button'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>勉強会に来てくれる人を募集しよう</h1>
    <ButtonTwitter>Twitter</ButtonTwitter>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
