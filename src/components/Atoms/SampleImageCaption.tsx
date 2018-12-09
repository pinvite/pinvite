import Typography from '@material-ui/core/Typography'
import React from 'react'
import styled from 'styled-components'
import MuiTheme from '../../theme/MuiTheme'
import Atom from './Atom'

export interface SampleImageCaptionProps {
  text: string
  className?: string // allow styled-components to inject CSS margin from outside.
                     // Only margin, no other CSS property from outside.
}

const AtomStyled = styled(Atom)`
&& {
  background-color: ${MuiTheme.palette.primary.dark};
  color: ${MuiTheme.palette.primary.contrastText};
}
`
const SampleImageCaption: React.SFC<SampleImageCaptionProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <AtomStyled className={props.className}>
    <Typography variant='h6' color='textPrimary'>{props.text}</Typography>
  </AtomStyled>

export default SampleImageCaption
