import React, {Fragment} from 'react'
import styled from 'styled-components'
import {InputTitle, InputDetails, InputMoneyAmount, InputTime} from '../Atoms/Inputs'

export interface InviteInputsProps {
  inputTitleLabel: string,
  inputTitleHelperText: string,
  inputDetailsLabel: string,
  inputMoneyAmountLabel: string,
  inputTimeLabel: string,
}

const Layout = styled.div`
&& {
  display: flex;
  justify-content: space-between;
}
`

const InviteInputs: React.SFC<InviteInputsProps> = (props) =>
  <Fragment>
    <InputTitle label={props.inputTitleLabel} helperText={props.inputTitleHelperText}/>
    <InputDetails label={props.inputDetailsLabel} />
    <InputMoneyAmount label={props.inputMoneyAmountLabel} />
    <InputTime label={props.inputTimeLabel} />
  </Fragment>

export default InviteInputs


