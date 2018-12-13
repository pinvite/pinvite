import Button, { ButtonProps } from '@material-ui/core/Button'
import React from 'react'
import styled from 'styled-components'
import {AuthStatusContext} from '../../context/AuthStatusContext'
import MuiTheme from '../../theme/MuiTheme'
import Atom from './Atom'

export interface PrimaryButtonProps {
  text: string
  className?: string // allow styled-components to inject CSS margin from outside.
                     // Only margin, no other CSS property from outside.
}

const ButtonStyled = styled(Button as React.SFC<ButtonProps>)`
&& {
  /* centering */
  display: block;
  margin: 0 auto;

  /* more detailed style which cannot be controlled by Material-UI Button's props*/
  font-size: ${MuiTheme.typography.h6.fontSize};
  padding: 16px 20px;
}`

const PrimaryButton: React.SFC<PrimaryButtonProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <AuthStatusContext.Consumer>
      {
        ({handleLogin}) =>
          <ButtonStyled
            variant='contained'
            color='secondary'
            onClick={handleLogin}
          >{props.text}</ButtonStyled>
      }
    </AuthStatusContext.Consumer>
  </Atom>

export default PrimaryButton
