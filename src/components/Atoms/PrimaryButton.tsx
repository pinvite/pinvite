import Button, { ButtonProps } from '@material-ui/core/Button'
import React from 'react'
import styled from 'styled-components'
import Atom from './Atom'

export interface PrimaryButtonProps {
  text: string
  className?: string // allow styled-components to inject CSS margin from outside.
                     // Only margin, no other CSS property from outside.
}

// centering
const ButtonStyled = styled(Button as React.SFC<ButtonProps>)`
&& {
  display: block;
  margin: 0 auto;
}`

const PrimaryButton: React.SFC<PrimaryButtonProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <ButtonStyled
      variant='contained'
      color='primary'
      size='large'
    >{props.text}</ButtonStyled>
  </Atom>

export default PrimaryButton
