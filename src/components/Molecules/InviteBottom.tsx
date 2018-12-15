import React, {Fragment} from 'react'
import styled from 'styled-components'
import PrimaryButton from '../Atoms/PrimaryButton'

export interface InviteBottomProps {
  previewButtonText: string
  previewButtonCallback: () => void
}

const BottomLayout = styled.div`
&& {
  display: flex;
  justify-content: flex-end;
}`

const InviteBottom: React.SFC<InviteBottomProps> = (props) =>
  <BottomLayout>
    <PrimaryButton text={props.previewButtonText} callback={props.previewButtonCallback}/>
  </BottomLayout>

export default InviteBottom
