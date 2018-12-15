import React from 'react'
import Atom from './Atom'
import TextField from '@material-ui/core/TextField';

export interface InputProps {
  className?: string // allow styled-components to inject CSS margin from outside.
                     // Only margin, no other CSS property from outside.
}

export const InputDetails: React.SFC<InputProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <TextField
      fullWidth
      id="description"
      label="勉強会の詳細"
      multiline
      margin="normal"
      variant="outlined"
      rows={4}
    />
  </Atom>
