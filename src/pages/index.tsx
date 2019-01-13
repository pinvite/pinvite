import React, { Fragment } from 'react'
import Index from '../components/Templates/Index'

const IndexPage = () => (
  <Index
    sampleImageSrc="https://res.cloudinary.com/pinvite/image/upload/c_fit,g_north_west,h_400,l_text:NotoSansJP-Black.otf_60_left:%28%25E6%258A%2595%25E7%25A8%25BF%25E4%25BE%258B%29%2520gatsby.js%25E3%2582%2592%25E4%25BD%25BF%25E3%2581%25A3%25E3%2581%25A6%25E5%25BC%258A%25E7%25A4%25BE%25E3%2582%25B3%25E3%2583%25BC%25E3%2583%259D%25E3%2583%25AC%25E3%2583%25BC%25E3%2583%2588%25E3%2582%25B5%25E3%2582%25A4%25E3%2583%2588%25E3%2582%2592PWA%25E5%258C%2596%25E3%2581%2597%25E3%2581%25BE%25E3%2581%2599%25E3%2580%2582%25E3%2581%259D%25E3%2581%2593%25E3%2581%25A7gatsby.js%25E5%258B%2589%25E5%25BC%25B7%25E4%25BC%259A%25E3%2581%25AE%25E8%25AC%259B%25E5%25B8%25AB%25E3%2582%2592%25E3%2581%2597%25E3%2581%25A6%25E3%2581%258F%25E3%2582%258C%25E3%2582%258B%25E4%25BA%25BA%25E3%2582%2592%25E5%258B%259F%25E9%259B%2586%25EF%25BC%2581,w_1000,x_100,y_50/c_fit,g_north_west,h_100,l_text:NotoSansJP-Black.otf_60_start:%25E5%258B%2589%25E5%25BC%25B7%25E4%25BC%259A%25E3%2581%25AE%25E3%2582%25AE%25E3%2583%25A3%25E3%2583%25A9:%252020000%2520%25E5%2586%2586,w_1000,x_100,y_400/c_fit,g_north_west,h_94,l_text:NotoSansJP-Black.otf_60_left:%25E5%258B%2589%25E5%25BC%25B7%25E4%25BC%259A%25E3%2581%25AE%25E6%2599%2582%25E9%2596%2593:%25202%2520%25E6%2599%2582%25E9%2596%2593,w_1000,x_100,y_500/background.png"
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
