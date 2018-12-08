import React from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'
import styled from 'styled-components'
import Atom from './Atom'

export interface PrimaryButtonProps {
  text: string
}

const ButtonStyled = styled(Button as React.SFC<ButtonProps>)`
&& {
  display: block;
  margin: 0 auto;
}`

const PrimaryButton: React.SFC<PrimaryButtonProps> = (props) =>
  <Atom>
    <ButtonStyled
      variant='contained'
      color="primary"
      size="large"
    >{props.text}</ButtonStyled>
  </Atom>

export default PrimaryButton