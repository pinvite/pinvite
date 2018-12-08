import React from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'
import Atom from './Atom'

export interface SecondaryButtonProps {
  text: string
}

const ButtonStyled = styled(Button as React.SFC<ButtonProps>)`
&& {
  display: block;
  margin: 0 auto;
}`

const SecondaryButton: React.SFC<SecondaryButtonProps> = (props) =>
  <Atom>
    <ButtonStyled
      variant='outlined'
      color="secondary"
      size="large"
    >{props.text}</ButtonStyled>
  </Atom>

export default SecondaryButton