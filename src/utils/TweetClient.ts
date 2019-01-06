import { InvitationRequest } from '../protocols/InvitationRequest'
import {
  InvitationResponse,
  isInvitationResponse,
} from '../protocols/InvitationResponse'

export interface SendTweetError {
  readonly message: string
  readonly status: number
}

export function isSendTweetError(obj: any): obj is SendTweetError {
  // User-defined Type Guards at https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
  const sendTweetError = obj as SendTweetError
  return (
    sendTweetError.message !== undefined && sendTweetError.status !== undefined
  )
}

export function sendTweet(
  userId: string,
  idToken: string,
  title: string,
  details: string,
  time: string,
  moneyAmount: string,
  imageURL: string
): Promise<InvitationResponse> {
  const requestBody: InvitationRequest = {
    title,
    details,
    time: parseInt(time, 10),
    moneyAmount: parseInt(moneyAmount, 10),
    imageURL,
    origin: window.location.origin,
  }
  const url = '/users/' + userId + '/invitations'

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: 'Bearer ' + idToken,
    },
    body: JSON.stringify(requestBody),
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        if (response.status === 500) {
          throw {
            status: response.status,
            message: 'エラー: ツイート失敗、サーバー側でエラーが発生しました。',
          }
          // TODO: 編集内容はローカルストレージに保存したので、同じデバイスの同じブラウザから一日ほど時間をおいて試してください。
          // エラーは運営者に報告されたので対応可能な時点で問題を解決します。
        } else if (response.status === 403) {
          throw {
            status: response.status,
            message:
              'エラー: あなたがツイートを行うための権限をもつユーザであることが確認できませんでした。',
          }
          // TODO: 一旦ログアウトした後、再度トップページからログインをお試しください
          // 編集内容はローカルストレージに保存したので、同じデバイスの同じブラウザから再度同内容の投稿を試みていただくことができます。
        } else {
          throw {
            status: response.status,
            message: 'エラー: 予期しないエラーが発生しました。',
          }
          // TODO: エラーは運営者に報告されたので対応可能な時点で問題を解決します。
        }
      }
    })
    .then(json => {
      if (isInvitationResponse(json)) {
        return json
      } else {
        throw {
          status: 200,
          message: 'エラー: 予期しないエラーが発生しました。',
        }
      }
    })
    .catch(error => {
      throw new Error('エラー: 予期しないエラーが発生しました。')
    })
}
