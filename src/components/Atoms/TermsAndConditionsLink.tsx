import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import MuiTheme from '../../theme/MuiTheme'
import Atom from './Atom'

export interface TermsAndConditionsLinkProps {
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const LinkStyled = styled(Link)`
  && {
    color: ${MuiTheme.palette.common.white};
  }
`

const TermsAndConditionsLink: React.SFC<
  TermsAndConditionsLinkProps
> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <LinkStyled to="/terms_and_conditions">注意事項</LinkStyled>
  </Atom>
)

export default TermsAndConditionsLink
