import React from 'react'
import {Container, Description, TweetImage} from './styled.js'

const InviteCard = ({description, imageUrl}) => { 
  return (
    <Container>
      <TweetImage src={imageUrl}></TweetImage>
      <Description>{description}</Description>
    </Container>
  )
}

export default InviteCard