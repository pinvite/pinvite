import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import InputAdornment, { InputAdornmentProps } from '@material-ui/core/InputAdornment'
import Atom from '../Atom'
import {ClassNameProps} from './ClassNameProps'

export const InputTitle: React.SFC<ClassNameProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <TextField
      label="勉強会のタイトル"
      helperText="70文字以内で入力してください"
      fullWidth
      margin="none"
      multiline
      rows={3}
      variant="outlined"
    />
  </Atom>

