import React from 'react'
import TextField from '@material-ui/core/TextField'
import Atom from '../Atom'
import {ClassNameProps} from './ClassNameProps'

export const InputDetails: React.SFC<ClassNameProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <TextField
      fullWidth
      label="勉強会の詳細"
      multiline
      margin="none"
      variant="outlined"
      rows={4}
    />
  </Atom>
