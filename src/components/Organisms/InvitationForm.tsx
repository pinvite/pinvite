import React, {Fragment} from 'react'
import InviteInputs from '../Molecules/InviteInputs'
import InviteBottom from '../Molecules/InviteBottom'
import PreviewBottom from '../Molecules/PreviewBottom'
import ImageLoader from '../Molecules/ImageLoader';
import {cloudinaryImageUrl} from '../../utils/cloudinary'

const spinnerImageURL = 'https://res.cloudinary.com/pinvite/image/upload/v1543695206/spinner.gif'

export interface InvitationFormProps {
  inputTitleLabel: string
  inputTitleHelperText: string
  inputDetailsLabel: string
  inputMoneyAmountLabel: string
  inputTimeLabel: string
  previewButtonText: string
  goBackButtonText: string
  tweetButtonText: string
  className?: string // allow styled-components to inject CSS margin from outside.
                     // Only margin, no other CSS property from outside
}

interface InvitationFormState {
  title: string
  details: string
  moneyAmount: string
  time: string
  preview: boolean
  previewImageSrc: string
}

class InvitationForm extends React.Component<InvitationFormProps, InvitationFormState> {
  constructor(props: InvitationFormProps){
    super(props)
    this.state = {
      title: '',
      details: '',
      moneyAmount: '',
      time: '',
      preview: false,
      previewImageSrc: spinnerImageURL
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

  isEmpty(input: string): boolean {
    return (input.length == 0)
  }

  isErrorTitle(): boolean {
    return (this.state.title.length > 70)
  }

  isErrorDetails(): boolean {
    return (this.state.details.length > 1000)
  }

  isErrorMoneyAmount(): boolean {
    return (parseInt(this.state.moneyAmount) < 0)
  }

  isErrorTime(): boolean {
    return (parseInt(this.state.time) < 0)
  }

  isDisabledInput(): boolean {
    return (
      this.isEmpty(this.state.title) || this.isErrorTitle()
      || this.isEmpty(this.state.details) || this.isErrorDetails()
      || this.isEmpty(this.state.moneyAmount) || this.isErrorMoneyAmount()
      || this.isEmpty(this.state.time) || this.isErrorTime()
    )
  }

  renderInputs(){
    return(
      <Fragment>
        <InviteInputs
          inputTitleProps = {{
            label: this.props.inputTitleLabel,
            value: this.state.title,
            helperText: this.props.inputTitleHelperText,
            error: this.isErrorTitle(),
            onChange: this.onTitleChange
          }}
          inputDetailsProps  = {{
            label: this.props.inputDetailsLabel,
            value: this.state.details,
            error: this.isErrorDetails(),
            onChange: this.onDetailsChange
          }}
          inputMoneyAmountProps  = {{
            label: this.props.inputMoneyAmountLabel,
            value: this.state.moneyAmount,
            error: this.isErrorMoneyAmount(),
            onChange: this.onMoneyAmountChange
          }}
          inputTimeProps  = {{
            label: this.props.inputTimeLabel,
            value: this.state.time,
            error: this.isErrorTime(),
            onChange: this.onTimeChange
          }}
        />
        <InviteBottom
          previewButtonText={this.props.previewButtonText}
          previewButtonCallback={this.onPreviewButtonPressed}
          previewDisabled={this.isDisabledInput()}
          />
      </Fragment>
    )
  }

  renderPreview(){
    return(
      <Fragment>
        <ImageLoader
          previewImageURL={this.state.previewImageSrc}
          imageURL={cloudinaryImageUrl(this.state.title, this.state.time, this.state.moneyAmount)}
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
