import Paper from '@material-ui/core/Paper'
import Typography, { TypographyProps } from '@material-ui/core/Typography'
import React from 'react'
import styled from 'styled-components'
import {DescriptionProps, H3Centered, H4Left} from '../Atoms/Description'
import PrimaryButton, { PrimaryButtonProps } from '../Atoms/PrimaryButton'

export interface CallToActionProp {
  description: React.ReactNode,
  buttonText: string,
  className?: string
}

const H3CenteredStyled = styled(H3Centered as React.SFC<DescriptionProps>)`
&& {
  margin-bottom: 80px;
}
`

const H4LeftStyled = styled(H4Left as React.SFC<DescriptionProps>)`
&& {
  margin-bottom: 80px;
}
`

export const CallToActionTop: React.SFC<CallToActionProp> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.</Atom>
  // Only margin, no other CSS property from outside.
  <Paper className={props.className} elevation={0}>
    <H3CenteredStyled description={props.description} />
    <PrimaryButton text={props.buttonText} />
  </Paper>

export const CallToActionBottom: React.SFC<CallToActionProp> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.</Atom>
  // Only margin, no other CSS property from outside.
  <Paper className={props.className} elevation={0}>
    <H4LeftStyled description={props.description} />
    <PrimaryButton text={props.buttonText} />
  </Paper>
