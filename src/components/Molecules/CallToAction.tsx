import React from 'react'
import Typography  from '@material-ui/core/Typography'
import Paper from  '@material-ui/core/Paper'
import PrimaryButton from  '../Atoms/PrimaryButton'

export interface CallToActionProp {
  description: string,
  buttonText: string
}

const CallToAction: React.SFC<CallToActionProp> = (props) =>
  <Paper elevation={0}>
    <Typography variant='h4'>{props.description}</Typography>
    <PrimaryButton text={props.buttonText} />
  </Paper>

export default CallToAction