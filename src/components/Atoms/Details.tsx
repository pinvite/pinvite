import Typography from '@material-ui/core/Typography'
import React from 'react'
import Atom from './Atom'

export interface DetailsProps {
  text: string
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const Details: React.SFC<DetailsProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.</Atom>
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant="body1">{props.text}</Typography>
  </Atom>
)

export default Details
