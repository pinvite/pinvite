import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '../Atoms/PrimaryButton'
import SecondaryButton from '../Atoms/SecondaryButton'

export interface PreviewBottomProps {
  goBackButtonText: string
  tweetButtonText: string
  goBackButtonCallback: () => void
  tweetButtonCallback: () => void
}

const BottomLayout = styled.div`
&& {
  display: flex;
  justify-content: space-between;
}`

const PreviewBottom: React.SFC<PreviewBottomProps> = (props) =>
  <BottomLayout>
    <SecondaryButton text={props.goBackButtonText} callback={props.goBackButtonCallback}/>
    <PrimaryButton text={props.tweetButtonText} callback={props.tweetButtonCallback}/>
  </BottomLayout>

export default PreviewBottom
