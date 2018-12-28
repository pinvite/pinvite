import MuiIcon, { IconProps } from '@material-ui/core/Icon'
import React from 'react'
import styled from 'styled-components'
import MuiTheme from '../../theme/MuiTheme'
import Atom from './Atom'

export interface IconProps {
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const AtomStyled = styled(Atom)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const MuiIconStyled = styled(MuiIcon as React.SFC<IconProps>)`
  && {
    color: ${MuiTheme.palette.text.primary};
  }
`

const Icon: React.SFC<IconProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.</Atom>
  // Only margin, no other CSS property from outside.
  <AtomStyled className={props.className}>
    <MuiIconStyled>sentiment_very_dissatisfied</MuiIconStyled>
  </AtomStyled>
)

export default Icon
