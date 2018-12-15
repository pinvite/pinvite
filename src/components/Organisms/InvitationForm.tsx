import React, {Fragment} from 'react'
import InviteInputs from '../Molecules/InviteInputs'
import InviteBottom from '../Molecules/InviteBottom'

export interface InvitationFormProps {
  inputTitleLabel: string,
  inputTitleHelperText: string,
  inputDetailsLabel: string,
  inputMoneyAmountLabel: string,
  inputTimeLabel: string,
  previewButtonText: string,
  className?: string // allow styled-components to inject CSS margin from outside.
  // Only margin, no other CSS property from outside
}

interface InvitationFormState {
  title: string,
  details: string,
  moneyAmount: number | null,
  time: number | null,
}

class InvitationForm extends React.Component<InvitationFormProps, InvitationFormState> {
  constructor(props: InvitationFormProps){
    super(props)
    this.state = {title: '', details: '', moneyAmount: null, time: null}
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onDetailsChange = this.onDetailsChange.bind(this)
    this.onMoneyAmountChange = this.onMoneyAmountChange.bind(this)
    this.onTimeChange = this.onTimeChange.bind(this)
  }

  onTitleChange(title: string) {
    this.setState({title})
  }

  onDetailsChange(details: string) {
    this.setState({details})
  }

  onMoneyAmountChange(moneyAmount: number) {
    this.setState({moneyAmount})
  }

  onTimeChange(time: number) {
    this.setState({time})
  }
  
  render(){
    return(
      <div className={this.props.className}>
        <InviteInputs
          inputTitleProps = {{
            label: this.props.inputTitleLabel,
            helperText: this.props.inputTitleHelperText,
            error: this.state.title != null && this.state.title.length > 70,
            onChange: this.onTitleChange
          }}
          inputDetailsProps  = {{
            label: this.props.inputDetailsLabel,
            onChange: this.onTitleChange
          }}
          inputMoneyAmountProps  = {{
            label: this.props.inputMoneyAmountLabel,
            onChange: this.onTitleChange
          }}
          inputTimeProps  = {{
            label: this.props.inputTimeLabel,
            onChange: this.onTitleChange
          }}
        />
        <InviteBottom
          previewButtonText={this.props.previewButtonText}
        />
      </div>        
    )
  }
}

export default InvitationForm
