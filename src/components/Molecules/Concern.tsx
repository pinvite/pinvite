import React from 'react'
import styled from 'styled-components'
import {H6Left} from '../Atoms/Description'
import Icon from '../Atoms/Icon'

export interface ConcernProps {
  text: string,
  className?: string // allow styled-components to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Concern: React.SFC<ConcernProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <FlexContainer className={props.className} >
    <Icon />
    <H6Left description={props.text} />
  </FlexContainer>

export default Concern
