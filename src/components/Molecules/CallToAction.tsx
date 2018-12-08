import React from 'react'
import Typography  from '@material-ui/core/Typography'
import Paper from  '@material-ui/core/Paper'
import RegistrationButton from  '../Atoms/RegistrationButton'

export interface CallToActionProp {
  description: string,
  buttonText: string
}

const CallToAction: React.SFC<CallToActionProp> = (props) =>
  <Paper elevation={0}>
    <Typography variant='h4'>{props.description}</Typography>
    <RegistrationButton text={props.buttonText} />
  </Paper>

export default CallToAction