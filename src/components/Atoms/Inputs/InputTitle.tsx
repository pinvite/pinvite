import React from 'react'
import TextField from '@material-ui/core/TextField'
import Atom from '../Atom'
import {InputFieldProps} from './InputFieldProps'

export const InputTitle: React.SFC<InputFieldProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <TextField
      label={props.label}
      helperText={props.helperText}
      fullWidth
      margin="none"
      multiline
      rows={3}
      variant="outlined"
      onChange={
        (event) => {
          if(props.onChange) // the onChange callback is optional, so call it only when it exists
            props.onChange(event.currentTarget.value)
        }
      }
      error={props.error}
    />
  </Atom>
