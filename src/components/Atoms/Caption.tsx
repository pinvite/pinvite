import Typography from '@material-ui/core/Typography'
import React from 'react'
import styled from 'styled-components'
import MuiTheme from '../../theme/MuiTheme'
import Atom from './Atom'

export interface CaptionProps {
  text: string
  className?: string // allow styled-components to inject CSS margin from outside.
                     // Only margin, no other CSS property from outside.
}

const Caption: React.SFC<CaptionProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='h6' color='textPrimary'>{props.text}</Typography>
  </Atom>

export default Caption
