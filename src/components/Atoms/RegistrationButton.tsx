import React from 'react'
import Button from '@material-ui/core/Button'
import Atom from './Atom'

export interface RegistrationButtonProp {
  text: string
}

const RegistrationButton: React.SFC<RegistrationButtonProp> = (props) =>
  <Atom>
    <Button
      variant='contained'
      color="secondary"
      size="large"
    >{props.text}</Button>
  </Atom>

export default RegistrationButton