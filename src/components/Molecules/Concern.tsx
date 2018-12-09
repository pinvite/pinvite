import React from 'react'
import styled from 'styled-components'
import {DescriptionProps, H6Left} from '../Atoms/Description'
import Icon from '../Atoms/Icon'
export interface ConcernProps {
  text: string
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const IconStyled = styled(Icon)`
  margin: auto 0;
`

const Concern: React.SFC<ConcernProps> = (props) =>
  <FlexContainer>
    <IconStyled />
    <H6Left description={props.text} />
  </FlexContainer>

export default Concern
