import React from 'react'
import TextField from '@material-ui/core/TextField'
import Atom from '../Atom'
import {InputFieldProps} from './InputFieldProps'

export const InputDetails: React.SFC<InputFieldProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <TextField
      fullWidth
      label={props.label}
      multiline
      margin="none"
      variant="outlined"
      rows={4}
    />
  </Atom>
