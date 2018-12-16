import React, {Fragment} from 'react'
import styled from 'styled-components'
import {InputTitle, InputDetails, InputMoneyAmount, InputTime, InputFieldProps} from '../Atoms/Inputs'

export interface InviteInputsProps {
  inputTitleProps: InputFieldProps,
  inputDetailsProps: InputFieldProps,
  inputMoneyAmountProps: InputFieldProps,
  inputTimeProps: InputFieldProps,
}

interface InviteInputsState {
  titleError: boolean,
}

const Layout = styled.div`
&& {
  display: flex;
  justify-content: space-between;
}`

class InviteInputs extends React.Component<InviteInputsProps, InviteInputsState> {
  constructor(props: InviteInputsProps){
    super(props)
    this.state= {titleError: false}

  }

  render(){
    return(
      <Fragment>
        <InputTitle
          label={this.props.inputTitleProps.label}
          value={this.props.inputTitleProps.value}
          helperText={this.props.inputTitleProps.helperText}
          onChange={this.props.inputTitleProps.onChange}
          error={this.props.inputTitleProps.error}
        />
        <InputDetails
          label={this.props.inputDetailsProps.label}
          value={this.props.inputDetailsProps.value}
          helperText={this.props.inputDetailsProps.helperText}
          onChange={this.props.inputDetailsProps.onChange}
          error={this.props.inputDetailsProps.error}       
        />
        <InputMoneyAmount
          label={this.props.inputMoneyAmountProps.label}
          value={this.props.inputMoneyAmountProps.value}
          helperText={this.props.inputMoneyAmountProps.helperText}
          onChange={this.props.inputMoneyAmountProps.onChange}
          error={this.props.inputMoneyAmountProps.error}               
        />
        <InputTime
          label={this.props.inputTimeProps.label}
          value={this.props.inputTimeProps.value}
          helperText={this.props.inputTimeProps.helperText}
          onChange={this.props.inputTimeProps.onChange}
          error={this.props.inputTimeProps.error}        
        />
      </Fragment>  
    )
  }
}

export default InviteInputs


