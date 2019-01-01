import Button, { ButtonProps } from '@material-ui/core/Button'
import React from 'react'
import styled from 'styled-components'
import MuiTheme from '../../theme/MuiTheme'
import Atom from './Atom'

export interface PrimaryButtonProps {
  text: string
  callback: () => void
  disabled?: boolean
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const ButtonStyled = styled(Button as React.SFC<ButtonProps>)`
  && {
    /* centering */
    display: block;
    margin: 0 auto;

    /* more detailed style which cannot be controlled by Material-UI Button's props*/
    font-size: ${MuiTheme.typography.h6.fontSize};
    width: 200px;
    height: 60px;
    color: ${MuiTheme.palette.primary.contrastText};
  }
`

const PrimaryButton: React.SFC<PrimaryButtonProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <ButtonStyled
      variant="contained"
      color="primary"
      disabled={props.disabled}
      onClick={props.callback}
      data-cy={'primary-button'}
    >
      {props.text}
    </ButtonStyled>
  </Atom>
)

export default PrimaryButton
