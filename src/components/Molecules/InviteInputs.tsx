import React from 'react'
import {
  InputDetails,
  InputFieldProps,
  InputMoneyAmount,
  InputTime,
  InputTitle,
} from '../Atoms/Inputs'

export interface InviteInputsProps {
  inputTitleProps: InputFieldProps
  inputDetailsProps: InputFieldProps
  inputMoneyAmountProps: InputFieldProps
  inputTimeProps: InputFieldProps
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const InviteInputs: React.SFC<InviteInputsProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <div className={props.className}>
    <InputTitle
      label={props.inputTitleProps.label}
      value={props.inputTitleProps.value}
      helperText={props.inputTitleProps.helperText}
      onChange={props.inputTitleProps.onChange}
      error={props.inputTitleProps.error}
    />
    <InputDetails
      label={props.inputDetailsProps.label}
      value={props.inputDetailsProps.value}
      helperText={props.inputDetailsProps.helperText}
      onChange={props.inputDetailsProps.onChange}
      error={props.inputDetailsProps.error}
    />
    <InputMoneyAmount
      label={props.inputMoneyAmountProps.label}
      value={props.inputMoneyAmountProps.value}
      helperText={props.inputMoneyAmountProps.helperText}
      onChange={props.inputMoneyAmountProps.onChange}
      error={props.inputMoneyAmountProps.error}
    />
    <InputTime
      label={props.inputTimeProps.label}
      value={props.inputTimeProps.value}
      helperText={props.inputTimeProps.helperText}
      onChange={props.inputTimeProps.onChange}
      error={props.inputTimeProps.error}
    />
  </div>
)

export default InviteInputs
