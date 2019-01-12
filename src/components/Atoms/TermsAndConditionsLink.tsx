import { Button } from '@material-ui/core'
import { navigate } from 'gatsby'
import React from 'react'
import Atom from './Atom'

export interface TermsAndConditionsProps {
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const TermsAndConditionsLink: React.SFC<TermsAndConditionsProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Button
      color="primary"
      size="small"
      onClick={e => {
        navigate('/terms_and_conditions')
      }}
    >
      注意事項
    </Button>
  </Atom>
)

export default TermsAndConditionsLink
