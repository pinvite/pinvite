import Typography, { TypographyProps } from '@material-ui/core/Typography'
import React from 'react'
import styled from 'styled-components'
import MuiTheme from '../../theme/MuiTheme'
import Atom from './Atom'

export interface AppNameProps {
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const TypographyStyled = styled(Typography as React.SFC<TypographyProps>)`
  && {
    color: ${MuiTheme.palette.primary.light};
  }
`
const AlphaRelease: React.SFC<AppNameProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <TypographyStyled variant="h6">(&#945; release)</TypographyStyled>
  </Atom>
)

export default AlphaRelease
