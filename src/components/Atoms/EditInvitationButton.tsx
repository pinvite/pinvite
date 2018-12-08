import React from 'react'
import Button from '@material-ui/core/Button'
import Atom from './Atom'

const EditInvitationButton = () =>
  <Atom>
    <Button
    variant='contained'
    color="secondary"
    size="large"
    >募集内容を入力</Button>
  </Atom>

export default EditInvitationButton