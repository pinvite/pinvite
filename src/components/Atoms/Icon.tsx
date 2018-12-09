import MuiIcon from '@material-ui/core/Icon'
import React from 'react'
import styled from 'styled-components'
import Atom from './Atom'

export interface IconProps {
  className?: string // allow styled-components to inject CSS margin from outside.
                     // Only margin, no other CSS property from outside.
}

const AtomStyled = styled(Atom)`
&& {
  display: flex;
  justify-content: center;
  align-items: center;
}
`

const Icon: React.SFC<IconProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.</Atom>
  // Only margin, no other CSS property from outside.
  <AtomStyled className={props.className}>
    <MuiIcon>sentiment_very_dissatisfied</MuiIcon>
  </AtomStyled>

export default Icon
