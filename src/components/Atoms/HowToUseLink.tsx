import { Button } from '@material-ui/core'
import { navigate } from 'gatsby'
import React from 'react'
import Atom from './Atom'

export interface HowToUseLinkProps {
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const HowToUseLink: React.SFC<HowToUseLinkProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Button
      color="primary"
      size="small"
      onClick={e => {
        navigate('/how_to_use')
      }}
    >
      使い方
    </Button>
  </Atom>
)

export default HowToUseLink
