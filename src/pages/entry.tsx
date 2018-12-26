import React from 'react'
import Entry from '../components/Templates/Entry'

class EntryPage extends React.Component {
  render() {
    return (
      <Entry 
        inputTitleLabel = "勉強会のタイトル"
        inputTitleHelperText = "70文字以内で入力してください"
        inputDetailsLabel = "勉強会の詳細"
        inputMoneyAmountLabel = "勉強会のギャラ"
        inputTimeLabel = "勉強会の目安時間"
        gobackButtonText="戻る"
        previewButtonText="プレビュー"
        tweetButtonText="ツイート"
      />
    );
  }
}

export default EntryPage