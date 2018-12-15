import React, {Fragment} from 'react'
import styled from 'styled-components'
import PrimaryButton from '../Atoms/PrimaryButton'
import SecondaryButton from '../Atoms/SecondaryButton'

export interface InviteBottomProps {
  gobackButtonText: string
  tweetButtonText: string
  gobackButtonCallback: () => void
  tweetButtonCallback: () => void
}

const BottomLayout = styled.div`
&& {
  display: flex;
  justify-content: space-between;
}`

const PreviewBottom: React.SFC<InviteBottomProps> = (props) =>
  <BottomLayout>
    <SecondaryButton text={props.gobackButtonText} callback={props.gobackButtonCallback}/>
    <PrimaryButton text={props.tweetButtonText} callback={props.tweetButtonCallback}/>
  </BottomLayout>

export default PreviewBottom
