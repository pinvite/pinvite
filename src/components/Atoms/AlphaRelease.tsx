import Typography, { TypographyProps } from '@material-ui/core/Typography'
import React from 'react'
import MuiTheme from '../../theme/MuiTheme'
import Atom from './Atom'

export interface AlphaReleaseProps {
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const AlphaRelease: React.SFC<AlphaReleaseProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant="body2" color="textSecondary">
      alpha release
    </Typography>
  </Atom>
)

export default AlphaRelease
