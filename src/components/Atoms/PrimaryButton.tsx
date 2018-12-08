import React from 'react'
import Button from '@material-ui/core/Button'
import Atom from './Atom'

export interface PrimaryButtonProps {
  text: string
}

const PrimaryButton: React.SFC<PrimaryButtonProps> = (props) =>
  <Atom>
    <Button
      variant='contained'
      color="primary"
      size="large"
    >{props.text}</Button>
  </Atom>

export default PrimaryButton