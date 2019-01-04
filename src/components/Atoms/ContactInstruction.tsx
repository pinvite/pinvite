import Typography from '@material-ui/core/Typography'
import React from 'react'
import Atom from './Atom'

export interface ContactInstructionProps {
  text: string
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const ContactInstruction: React.SFC<ContactInstructionProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.</Atom>
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Typography variant="body2">{props.text}</Typography>
  </Atom>
)

export default ContactInstruction
