import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import InputAdornment, { InputAdornmentProps } from '@material-ui/core/InputAdornment'
import Atom from '../Atom'
import MuiTheme from '../../../theme/MuiTheme'
import {InputFieldProps} from './InputFieldProps'

const InputAdornmentStyled = styled(InputAdornment as React.SFC<InputAdornmentProps>)`
&& {
  margin-right: ${MuiTheme.spacing.unit},
}`

export const InputMoneyAmount: React.SFC<InputFieldProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <TextField
      variant="outlined"
      type="number"
      margin="none"
      InputProps={{
        // style={{marginTop: 0}} is some hack to correct styling,
        // as the `position` attribute is required but that adds a weird `margin-top: 16px` styling
        startAdornment: <InputAdornmentStyled style={{marginTop: 0}} variant="filled" position="start">¥</InputAdornmentStyled>
      }}
      label={props.label}
      helperText={props.helperText}
      error={props.error}
      onChange={
        (event) => {
          if(props.onChange) // the onChange callback is optional, so call it only when it exists
            props.onChange(event.currentTarget.value)
        }
      }

    />
  </Atom>
