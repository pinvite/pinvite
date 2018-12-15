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
    this.onTitleChange = this.onTitleChange.bind(this)

  }

  onTitleChange(title: string) {
    this.setState({titleError: title.length > 70})
  }

  render(){
    return(
      <Fragment>
        <InputTitle
          label={this.props.inputTitleLabel}
          helperText={this.props.inputTitleHelperText}
          onChange={this.onTitleChange}
          error={true}
        />
        <InputDetails label={this.props.inputDetailsLabel} />
        <InputMoneyAmount label={this.props.inputMoneyAmountLabel} />
        <InputTime label={this.props.inputTimeLabel} />
      </Fragment>  
    )
  }
}

export default InviteInputs


