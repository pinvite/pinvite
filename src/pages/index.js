import React from 'react'
import {ButtonTwitter} from '../components/Atoms/Button'
import {Header1} from '../components/style-typography'
import Layout from '../components/layout'
import {AuthStatusProvider, AuthStatusConsumer} from '../container/Login'
import Redirect from '../container/Redirect'

class IndexPage extends React.Component {

  render () {
    return (
      <Layout>
        <Header1 center>勉強会に来てくれる人を募集しよう</Header1>
        <AuthStatusConsumer>
          {({handleLogin, result}) => (
            <>
              {
                result
                ? (<Redirect to={'/invite/'} />)
                : (<ButtonTwitter onClick={handleLogin}>Twitterでログイン</ButtonTwitter>)
              }
            </>
          )}
        </AuthStatusConsumer>
      </Layout>
    )
  }
}

export default IndexPage
