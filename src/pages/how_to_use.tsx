import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import React, { Fragment } from 'react'
import HowToUse from '../components/Templates/HowToUse'

const HowToUsePage: React.SFC<HowToUsePageProps> = props => (
  <HowToUse
    steps={[
      {
        title: '1. Twitterアカウントとの連携',
        imgFluid: props.data.initialScreen.childImageSharp.fluid,
        instruction: `トップページの「TWITTERで登録」ボタン下からリンクされている注意事項をよく読み、
        「TWITTERで登録」ボタンを押してください。TwitterとのOAuth連携が始まります。`,
      },
      {
        title: '2. Twitterアカウントとの連携後',
        imgFluid: props.data.afterLogin.childImageSharp.fluid,
        instruction: `TwitterとのOAuth連携が無事完了したら、トップページに「募集内容を入力」ボタンが現れますので、
        そのボタンを押してください。`,
      },
      {
        title: '3. 勉強会講師募集内容を入力',
        imgFluid: props.data.enterInvitaion.childImageSharp.fluid,
        instruction: `手順2のあとは勉強会講師の募集内容の入力画面に移りますので、内容を入力してください。
        入力が完了したら右下の「プレビュー」ボタンが押せますので、押してください。`,
      },
      {
        title: '4. 画像プレビューを確認、ツイート',
        imgFluid: props.data.previewInvitation.childImageSharp.fluid,
        instruction: `勉強会講師募集用の画像がプレビュー表示されますので確認してください。問題なければ「ツイート」ボタンを押してください。
        修正したい箇所があれば、左下の「戻る」ボタンを押せば直前の募集内容を入力する手順に戻ることができます。`,
      },
      {
        title: '5. 自動ツイートと、ツイートのリンク先ページ生成',
        imgFluid: props.data.invitationPage.childImageSharp.fluid,
        instruction: `先程の手順で「ツイート」ボタンを押すと、勉強会講師募集用に生成したページに遷移します。
        同時に、あなたのツイッターアカウントから画像つきかつ、この生成されたページにリンクする形で自動ツイートされます。`,
      },
    ]}
  />
)

export default HowToUsePage

interface HowToUsePageProps {
  data: {
    initialScreen: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    afterLogin: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    enterInvitaion: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    previewInvitation: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    invitationPage: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

// As defined in gatsby-config.js, file path is relative to ${__dirname}/src/images
export const fluidImages = graphql`
  {
    afterLogin: file(relativePath: { eq: "howtouse/after-login.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    initialScreen: file(relativePath: { eq: "howtouse/initial-screen.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    enterInvitaion: file(
      relativePath: { eq: "howtouse/enter-invitation.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    previewInvitation: file(
      relativePath: { eq: "howtouse/preview-invitation.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    invitationPage: file(relativePath: { eq: "howtouse/invitation-page.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
