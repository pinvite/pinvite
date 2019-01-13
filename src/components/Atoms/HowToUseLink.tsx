import { Button } from '@material-ui/core'
import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import MuiTheme from '../../theme/MuiTheme'
import Atom from './Atom'

export interface HowToUseLinkProps {
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const LinkStyled = styled(Link)`
  && {
    color: ${MuiTheme.palette.common.white};
  }
`

const HowToUseLink: React.SFC<HowToUseLinkProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <LinkStyled to="/how_to_use">使い方</LinkStyled>
  </Atom>
)

export default HowToUseLink
