import React from 'react'
import Typography  from '@material-ui/core/Typography'
import Paper from  '@material-ui/core/Paper'
import styled from 'styled-components'
import PrimaryButton, { PrimaryButtonProps } from  '../Atoms/PrimaryButton'

export interface CallToActionProp {
  description: string,
  buttonText: string
}

const PrimaryButtonStyled = styled(PrimaryButton as React.SFC<PrimaryButtonProps>)`
&& {
  margin: auto;
}
`

const CallToAction: React.SFC<CallToActionProp> = (props) =>
  <Paper elevation={0}>
    <Typography variant='h4'>{props.description}</Typography>
    <PrimaryButtonStyled text={props.buttonText} />
  </Paper>

export default CallToAction