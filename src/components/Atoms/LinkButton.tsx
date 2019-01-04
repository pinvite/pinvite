import Button, { ButtonProps } from '@material-ui/core/Button'
import React from 'react'
import styled from 'styled-components'
import MuiTheme from '../../theme/MuiTheme'
import Atom from './Atom'

export interface LinkButtonProps {
  text: string
  href: string
  disabled?: boolean
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const LinkButtonStyled = styled(Button as React.SFC<ButtonProps>)`
  && {
    /* centering */
    display: block;
    margin: 0 auto;

    /* more detailed style which cannot be controlled by Material-UI Button's props*/
    font-size: ${MuiTheme.typography.h6.fontSize};
    color: ${MuiTheme.palette.primary.contrastText};
    text-transform: none;
    text-align: center;
    vertical-align: middle;
  }
`

const LinkButton: React.SFC<LinkButtonProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <LinkButtonStyled
      variant="contained"
      color="primary"
      disabled={props.disabled}
      data-cy={'primary-button'}
      href={props.href}
    >
      {props.text}
    </LinkButtonStyled>
  </Atom>
)

export default LinkButton
