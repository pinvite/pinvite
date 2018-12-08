import React from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'
import styled from 'styled-components'
import Atom from './Atom'

export interface SecondaryButtonProps {
  text: string,
  className?: string //allow styled-components to inject CSS from outside (e.g. for margin)
}

const ButtonStyled = styled(Button as React.SFC<ButtonProps>)`
&& {
  display: block;
  margin: 0 auto;
}`

const SecondaryButton: React.SFC<SecondaryButtonProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside. Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <ButtonStyled
      variant='outlined'
      color="secondary"
      size="large"
    >{props.text}</ButtonStyled>
  </Atom>

export default SecondaryButton