import React, { Fragment } from 'react'
import styled from 'styled-components'
import LinkButton from '../Atoms/LinkButton'

export interface InvitationBottomProps {
  twitterUserId: string
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const BottomLayout = styled.div`
  && {
    display: flex;
    justify-content: center;
  }
`

const InvitationBottom: React.SFC<InvitationBottomProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <BottomLayout className={props.className}>
    <LinkButton
      href="https://google.com"
      text={'@' + props.twitterUserId + 'のアカウントへ'}
    />
  </BottomLayout>
)

export default InvitationBottom
