import React from 'react'
import {Container, Title, Description, SecondaryTitle, TweetImage} from './styled.js'

const InviteCard = ({title, description, amount, time, imageUrl}) => { 
  return (
    <Container>
      <Title>{title}</Title>
      <SecondaryTitle>{time} {amount}円~</SecondaryTitle>
      <TweetImage src={imageUrl}></TweetImage>
      <Description>{description}</Description>
    </Container>
  )
}

export default InviteCard