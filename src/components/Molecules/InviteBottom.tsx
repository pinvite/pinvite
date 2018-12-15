import React, {Fragment} from 'react'
import styled from 'styled-components'
import GoBackButton from '../Atoms/GoBackButton'
import PreviewButton from '../Atoms/PreviewButton'

export interface InviteBottomProps {
  gobackButtonText: string
  previewButtonText: string
}

const Layout = styled.div`
&& {
  display: flex;
  justify-content: space-between;
}
`

const InviteBottom: React.SFC<InviteBottomProps> = (props) =>
  <Layout>
    <GoBackButton text={props.gobackButtonText} />
    <PreviewButton text={props.previewButtonText} />
  </Layout>

export default InviteBottom
