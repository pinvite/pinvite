import TextField from '@material-ui/core/TextField'
import React from 'react'
import Atom from '../Atom'
import { InputFieldProps } from './InputFieldProps'

export const InputDetails: React.SFC<InputFieldProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <TextField
      variant='outlined'
      margin='none'
      fullWidth
      multiline
      rows={10}
      label={props.label}
      value={props.value}
      helperText={props.helperText}
      error={props.error}
      onChange={event => {
        if (props.onChange) {
          // the onChange callback is optional, so call it only when it exists
          props.onChange(event.currentTarget.value)
        }
      }}
    />
  </Atom>
)
