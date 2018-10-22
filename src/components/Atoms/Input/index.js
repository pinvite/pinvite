import React from 'react'
import {InputWrapper, Input} from './styled'
import {Header4 as Label} from '../../style-typography'

const InputField = ({label, value, onChange}) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input value={value} onChange={onChange} />
    </InputWrapper>
  )
}

export default InputField