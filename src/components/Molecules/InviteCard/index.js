import React from 'react'
import {Container, Title, Description, SecondaryTitle} from './styled.js'

const InviteCard = ({title, description, amount, time}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SecondaryTitle>{time} {amount}円~</SecondaryTitle>
      <Description>{description}</Description>
    </Container>
  )
}

export default InviteCard