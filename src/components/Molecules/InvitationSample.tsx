import React from 'react'
import styled from 'styled-components'
import Caption from '../Atoms/Caption'
import SampleImage, { FullWidthImageProps } from '../Atoms/SampleImage'
import MuiTheme from '../../theme/MuiTheme'

export interface InvitationSampleProps {
  captionText: string
  className?: string
}

const SampleImageStyled = styled(SampleImage as React.SFC<FullWidthImageProps>)`
&& {
  margin: ${MuiTheme.spacing.unit * (-1) / 2}px
}`

const InvitationSample: React.SFC<InvitationSampleProps> = (props) =>
  <div className={props.className}>
    <Caption text={props.captionText} />
    <SampleImageStyled />
  </div>

export default InvitationSample
