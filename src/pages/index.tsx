import React, { Fragment } from 'react'
import Index from '../components/Templates/Index'

const IndexPage = () => (
  <Index
    sampleImageSrc="https://res.cloudinary.com/pinvite/image/upload/v1544954377/sample.png"
    firstCallToActionText={
      <Fragment>
        Twitterで勉強会の講師を
        <br />
        募集しましょう
      </Fragment>
    }
    secondCallToActionText={
      <Fragment>
        勉強会を開きましょう！
        <br />
        pinviteがTwitterでの講師探しをお手伝いします
      </Fragment>
    }
    sampleCaptionText="目を引く画像とともにツイート！"
    registerButtonText="Twitterで登録"
    jumpToButtonText="募集内容を入力"
    concernCaptionText="こんなことで困っていませんか？"
    concernText1="新技術を導入したいが社内にエキスパートがいない"
    concernText2="技術書や動画を見たがイマイチ理解が進まない"
    concernText3="導入したい技術のエキスパートと繋がりを持っていない"
  />
)

export default IndexPage
