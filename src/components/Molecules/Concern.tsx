import Typography from '@material-ui/core/Typography'
import React from 'react'
import styled from 'styled-components'
import Icon from '../Atoms/Icon'

export interface ConcernProps {
  text: string
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Concern: React.SFC<ConcernProps> = (props) =>
  <FlexContainer>
    <Icon />
    <Typography variant='h6'>{props.text}</Typography>
  </FlexContainer>

export default Concern
