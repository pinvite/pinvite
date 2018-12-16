import React, {Fragment} from 'react'
import styled from 'styled-components'
import PrimaryButton from '../Atoms/PrimaryButton'

export interface InviteBottomProps {
  previewButtonText: string
  previewButtonCallback: () => void,
  className?: string // allow styled-components to inject CSS margin from outside.
                     // Only margin, no other CSS property from outside.
}

const BottomLayout = styled.div`
&& {
  display: flex;
  justify-content: flex-end;
}`

const InviteBottom: React.SFC<InviteBottomProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <BottomLayout className={props.className} >
    <PrimaryButton text={props.previewButtonText} callback={props.previewButtonCallback}/>
  </BottomLayout>

export default InviteBottom
