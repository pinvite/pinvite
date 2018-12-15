import React, {Fragment} from 'react'
import styled from 'styled-components'
import SecondaryButton from '../Atoms/SecondaryButton'
import PrimaryButton from '../Atoms/PrimaryButton'

export interface InviteBottomProps {
  gobackButtonText: string
  previewButtonText: string
}

const BottomLayout = styled.div`
&& {
  display: flex;
  justify-content: space-between;
}
`

const InviteBottom: React.SFC<InviteBottomProps> = (props) =>
  <BottomLayout>
    <SecondaryButton text={props.gobackButtonText} callback={()=>{}}/>
    <PrimaryButton text={props.previewButtonText} callback={()=>{}}/>
  </BottomLayout>

export default InviteBottom
