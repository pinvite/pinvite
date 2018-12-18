import React from 'react'
import {H6Left} from '../Atoms/Description'
import Concern from './Concern'

export interface ConcerListProps {
  captionText: string
  concernText1: string
  concernText2: string
  concernText3: string
  className?: string // allow styled-components to inject CSS margin from outside.
                     // Only margin, no other CSS property from outside.
}

const ConcernList: React.SFC<ConcerListProps> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.</Atom>
  // Only margin, no other CSS property from outside.
  <div className={props.className}>
    <H6Left description={props.captionText} />
    <Concern text={props.concernText1} />
    <Concern text={props.concernText2} />
    <Concern text={props.concernText3} />
  </div>

export default ConcernList
