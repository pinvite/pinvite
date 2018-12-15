import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import InputAdornment, { InputAdornmentProps } from '@material-ui/core/InputAdornment'
import Atom from '../Atom'
import {ClassNameProps} from './ClassNameProps'

const InputAdornmentStyled = styled(InputAdornment as React.SFC<InputAdornmentProps>)`
&& {
  width: 3rem
}`

export const InputTime: React.SFC<ClassNameProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <TextField
      label="目安時間"
      margin="none"
      variant="outlined"
      InputProps={{
        endAdornment: <InputAdornmentStyled variant="filled" position="end">時間</InputAdornmentStyled>
      }}
    />
  </Atom>

