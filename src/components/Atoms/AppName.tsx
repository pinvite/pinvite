import Typography, { TypographyProps } from '@material-ui/core/Typography'
import React from 'react'
import styled from 'styled-components'
import MuiTheme from '../../theme/MuiTheme'
import Atom from './Atom'

export interface AppNameProps {
  onClick?: () => void
  className?: string // allow styled-components to inject CSS margin from outside.
                     // Only margin, no other CSS property from outside.
}

const TypographyStyled = styled(Typography as React.SFC<TypographyProps>)`
&& {
  font-family: 'Molle', cursive;
  cursor: pointer;
  color: ${MuiTheme.palette.common.white};
}
`
const AppName: React.SFC<AppNameProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className} onClick={props.onClick}>
    <TypographyStyled variant='h3'>pinvite</TypographyStyled>
  </Atom>

export default AppName
