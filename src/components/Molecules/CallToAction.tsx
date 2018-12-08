import React from 'react'
import Typography, { TypographyProps }  from '@material-ui/core/Typography'
import Paper from  '@material-ui/core/Paper'
import styled from 'styled-components'
import PrimaryButton, { PrimaryButtonProps } from  '../Atoms/PrimaryButton'

export interface CallToActionProp {
  description: string,
  buttonText: string
}

const TypographyStyled = styled(Typography as React.SFC<TypographyProps>)`
&& {
  margin-bottom: 80px;
}`

const PrimaryButtonStyled = styled(PrimaryButton as React.SFC<PrimaryButtonProps>)`
&& {
  margin-bottom: 40px;
}`

const CallToAction: React.SFC<CallToActionProp> = (props) =>
  <Paper elevation={0}>
    <TypographyStyled variant='h4'>{props.description}</TypographyStyled>
    <PrimaryButtonStyled text={props.buttonText} />
  </Paper>

export default CallToAction