import React from 'react'
import {ButtonTwitter} from '../components/Atoms/Button'
import {Header1} from '../components/style-typography'
import Layout from '../components/layout'
import {AuthStatusProvider, AuthStatusConsumer} from '../container/Login'

const IndexPage = () => {
  return (
    <Layout>
      <AuthStatusProvider>
        <Header1 center>勉強会に来てくれる人を募集しよう</Header1>
        <AuthStatusConsumer>
          {({handleLogin}) => (
            <div>
              <ButtonTwitter onClick={handleLogin}>Twitter</ButtonTwitter>
            </div>
          )}
        </AuthStatusConsumer>
        <AuthStatusConsumer>
          {({result}) => (
            <div>{JSON.stringify(result)}</div>
          )}
        </AuthStatusConsumer>
      </AuthStatusProvider>
    </Layout>
  )
}

export default IndexPage
