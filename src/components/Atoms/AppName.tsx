import React from 'react'
import Typography, { TypographyProps } from '@material-ui/core/Typography'
import styled from 'styled-components'
import Atom from './Atom'

export interface AppNameProps {
  className?: string //allow styled-components to inject CSS from outside (e.g. for margin)
}

const TypographyStyled = styled(Typography as React.SFC<TypographyProps>)`
&& {
  font-family: 'Fredoka One', cursive;
}
`
const AppName: React.SFC<AppNameProps> = (props) =>
  // Important to accept the className prop, to inject CSS from outside (e.g. for margin)
  <Atom className={props.className}>
    <TypographyStyled variant="h4" color="textPrimary">pinvite</TypographyStyled>
  </Atom>

export default AppName