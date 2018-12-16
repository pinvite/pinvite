import React from 'react'
import styled from 'styled-components'
import Caption from '../Atoms/Caption'
import FullWidthImage, { FullWidthImageProps } from '../Atoms/FullWidthImage'
import MuiTheme from '../../theme/MuiTheme'

export interface InvitationSampleProps {
  src: string,
  captionText: string,
  className?: string // allow styled-components to inject CSS margin from outside.
                     // Only margin, no other CSS property from outside.
}

const FullWidthImageStyled = styled(FullWidthImage as React.SFC<FullWidthImageProps>)`
&& {
  margin: ${MuiTheme.spacing.unit * (-1) / 2}px
}`

const InvitationSample: React.SFC<InvitationSampleProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <div className={props.className}>
    <Caption text={props.captionText} />
    <FullWidthImageStyled src={props.src} />
  </div>

export default InvitationSample
