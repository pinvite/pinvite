import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '../Atoms/PrimaryButton'
import SecondaryButton from '../Atoms/SecondaryButton'

export interface PreviewBottomProps {
  goBackButtonText: string
  tweetButtonText: string
  goBackButtonCallback: () => void
  tweetButtonCallback: () => void
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const BottomLayout = styled.div`
  && {
    display: flex;
    justify-content: space-between;
  }
`

const PreviewBottom: React.SFC<PreviewBottomProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <BottomLayout className={props.className}>
    <SecondaryButton
      text={props.goBackButtonText}
      callback={props.goBackButtonCallback}
    />
    <PrimaryButton
      text={props.tweetButtonText}
      callback={props.tweetButtonCallback}
    />
  </BottomLayout>
)

export default PreviewBottom
