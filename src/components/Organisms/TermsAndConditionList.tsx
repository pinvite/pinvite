import { List, ListItem, ListItemText, Typography } from '@material-ui/core'
import Modal, { ModalProps } from '@material-ui/core/Modal'
import React from 'react'
import styled from 'styled-components'
import LoadingIndicator from '../Molecules/LoadingIndicator'

export interface TermsAndConditionListProps {
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const TermsAndConditionList: React.SFC<TermsAndConditionListProps> = props => (
  <List className={props.className}>
    <ListItem>
      <ListItemText>
        pinvite(以下本サービス)をユーザとして利用する際の注意事項(以下本注意事項)について説明します。
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        *
        本サービスはリチャード伊真岡(以下本サービス開発者)個人によって開発、運用されています。
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        *
        本サービスは現在アルファ版としてリリースされています。意図せぬ動作やユーザデータ投稿の失敗、ユーザデータ消失等が起きる可能性があることをご了承ください。
        また、本サービスの見た目や機能はアルファ版であるため本サービス開発者の判断によって随時特段の予告なく変更される可能性があります。
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        * 本サービスは https://pinvite.fun
        のドメインにて提供されるウェブサービスです。現在ユーザはウェブブラウザによってのみ本サービスにアクセスできます。iOSおよびAndroidにおける専用モバイルアプリはありません。
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        *
        本サービスをご利用いただく際は、事前に本注意事項に同意の上、OAuthによるTwitterアカウント連携が必要です。OAuthによるTwitter連携の完了をもってユーザは注意事項全てに同意したものとみなします。
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        *
        本サービス開発者は随時、本注意事項を変更もしくは新たに利用規約を制定することができるものとします。
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        *
        本サービスを利用するにあたり、現状ではユーザは一切利用料金を払う必要がありません。
        しかし今後本注意事項変更もしくは利用規約制定とともに、一部機能を有料にする可能性があります。
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        * 本サービスの主目的は勉強会依頼の宣伝を掲載するものです。
        本サービスを通して成立する勉強会の依頼はすべて依頼者と承諾者の二者間での契約であり、
        本サービス開発者は当該契約および当該契約に関するトラブルに対し一切責任を負いません。
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        *
        本サービス開発者は、本サービス利用によって発生したいかなる不利益・損害に対しても責任を負いません。
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        *
        本サービスにデータを投稿する際、第三者及び本サービス開発者の著作権を侵害しないデータのみ投稿してください。
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        *
        本サービス開発者が不適切と判断する方法によってユーザが本サービスを利用した場合、
        本サービス開発者は予告なく当該ユーザの登録を抹消し、当該ユーザによって投稿されたデータを消去することができるものとします。
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        *
        本サービスにおいてユーザーが投稿するデータは、TwitterとのOAuth連携にかかる秘密情報を除き、全て公開情報としてあつかわれます。
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText>
        *
        本サービスは、サービス利用状況および開発者の都合によってサービスの継続が困難な場合には、本サービス開発者の定める告知期間の後、サービスを終了することがあります。
      </ListItemText>
    </ListItem>
  </List>
)

export default TermsAndConditionList
