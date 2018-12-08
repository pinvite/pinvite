import React from 'react'
import Button from '@material-ui/core/Button'
import Atom from './Atom'

export interface SecondaryButtonProps {
  text: string
}

const SecondaryButton: React.SFC<SecondaryButtonProps> = (props) =>
  <Atom>
    <Button
      variant='outlined'
      color="secondary"
      size="large"
    >{props.text}</Button>
  </Atom>

export default SecondaryButton