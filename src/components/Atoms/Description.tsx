import Typography from '@material-ui/core/Typography'
import React from 'react'
import Atom from './Atom'

export interface DescriptionProps {
  description: React.ReactNode
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

export const H1Centered: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='h1' align='center'>
      {props.description}
    </Typography>
  </Atom>
)

export const H1Left: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='h1'>{props.description}</Typography>
  </Atom>
)

export const H2Centered: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='h2' align='center'>
      {props.description}
    </Typography>
  </Atom>
)

export const H2Left: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='h2'>{props.description}</Typography>
  </Atom>
)

export const H3Centered: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='h3' align='center'>
      {props.description}
    </Typography>
  </Atom>
)

export const H3Left: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='h3'>{props.description}</Typography>
  </Atom>
)

export const H4Centered: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='h4' align='center'>
      {props.description}
    </Typography>
  </Atom>
)

export const H4Left: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='h4'>{props.description}</Typography>
  </Atom>
)

export const H5Centered: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='h5' align='center'>
      {props.description}
    </Typography>
  </Atom>
)

export const H5Left: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='h5'>{props.description}</Typography>
  </Atom>
)

export const H6Centered: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='h6' align='center'>
      {props.description}
    </Typography>
  </Atom>
)

export const H6Left: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='h6'>{props.description}</Typography>
  </Atom>
)

export const Subtitle1Centered: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='subtitle1' align='center'>
      {props.description}
    </Typography>
  </Atom>
)

export const Subtitle1Left: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='subtitle1'>{props.description}</Typography>
  </Atom>
)

export const Subtitle2Centered: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='subtitle2' align='center'>
      {props.description}
    </Typography>
  </Atom>
)

export const Subtitle2Left: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='subtitle2'>{props.description}</Typography>
  </Atom>
)

export const CaptionCentered: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='caption' align='center'>
      {props.description}
    </Typography>
  </Atom>
)

export const CaptionLeft: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='caption'>{props.description}</Typography>
  </Atom>
)

export const OverlineCentered: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='overline' align='center'>
      {props.description}
    </Typography>
  </Atom>
)

export const OverlineLeft: React.SFC<DescriptionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant='overline'>{props.description}</Typography>
  </Atom>
)
