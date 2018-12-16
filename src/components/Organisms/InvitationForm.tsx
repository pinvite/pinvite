import React, {Fragment} from 'react'
import InviteInputs from '../Molecules/InviteInputs'
import InviteBottom from '../Molecules/InviteBottom'
import PreviewBottom from '../Molecules/PreviewBottom'
import FullWidthImg from '../Atoms/FullWidthImage';
import {cloudinaryImageUrl} from '../../utils/cloudinary'

export interface InvitationFormProps {
  inputTitleLabel: string,
  inputTitleHelperText: string,
  inputDetailsLabel: string,
  inputMoneyAmountLabel: string,
  inputTimeLabel: string,
  previewButtonText: string,
  goBackButtonText: string,
  tweetButtonText: string,
  className?: string // allow styled-components to inject CSS margin from outside.
  // Only margin, no other CSS property from outside
}

interface InvitationFormState {
  title: string,
  details: string,
  moneyAmount: string,
  time: string,
  preview: boolean,
}

class InvitationForm extends React.Component<InvitationFormProps, InvitationFormState> {
  constructor(props: InvitationFormProps){
    super(props)
    this.state = {
      title: '',
      details: '',
      moneyAmount: '',
      time: '',
      preview: false
    }
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onDetailsChange = this.onDetailsChange.bind(this)
    this.onMoneyAmountChange = this.onMoneyAmountChange.bind(this)
    this.onTimeChange = this.onTimeChange.bind(this)
    this.onPreviewButtonPressed = this.onPreviewButtonPressed.bind(this)
    this.onGoBackButtonPressed = this.onGoBackButtonPressed.bind(this)
    this.onTweetButtonPressed = this.onTweetButtonPressed.bind(this)
  }

  onTitleChange(title: string) {
    this.setState({title})
    console.log(this.state)
  }

  onDetailsChange(details: string) {
    this.setState({details})
  }

  onMoneyAmountChange(moneyAmount: string) {
    this.setState({moneyAmount})
  }

  onTimeChange(time: string) {
    this.setState({time})
  }
  
  onPreviewButtonPressed() {
    this.setState({preview: true})
  }
  
  onGoBackButtonPressed() {
    this.setState({preview: false})
  }

  onTweetButtonPressed() {
  }

  renderInputs(){
    return(
      <Fragment>
        <InviteInputs
          inputTitleProps = {{
            label: this.props.inputTitleLabel,
            value: this.state.title,
            helperText: this.props.inputTitleHelperText,
            error: this.state.title != null && this.state.title.length > 70,
            onChange: this.onTitleChange
          }}
          inputDetailsProps  = {{
            label: this.props.inputDetailsLabel,
            value: this.state.details,
            onChange: this.onDetailsChange
          }}
          inputMoneyAmountProps  = {{
            label: this.props.inputMoneyAmountLabel,
            value: this.state.moneyAmount,
            onChange: this.onMoneyAmountChange
          }}
          inputTimeProps  = {{
            label: this.props.inputTimeLabel,
            value: this.state.time,
            onChange: this.onTimeChange
          }}
        />
        <InviteBottom
          previewButtonText={this.props.previewButtonText}
          previewButtonCallback={this.onPreviewButtonPressed}
        />
      </Fragment>
    )
  }

  renderPreview(){
    return(
      <Fragment>
        <FullWidthImg
          src={cloudinaryImageUrl(this.state.title)}
        />
        <PreviewBottom
          goBackButtonText={this.props.goBackButtonText}
          goBackButtonCallback={this.onGoBackButtonPressed}
          tweetButtonText={this.props.tweetButtonText}
          tweetButtonCallback={this.onTweetButtonPressed}
        />
      </Fragment>
    )
  }

  render(){
    if (this.state.preview)
      return(
        <div className={this.props.className}>
          {this.renderPreview()}
        </div>        
      )
    else
      return(
        <div className={this.props.className}>
          {this.renderInputs()}
        </div>        
      )
  }
}

export default InvitationForm
