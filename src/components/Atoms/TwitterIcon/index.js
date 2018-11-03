import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 48px;
  height: 48px;
`

const TwitterIcon = ({src}) => {
  return (
    <Container>
      <img src={src} />
    </Container>
  )
}

export default TwitterIcon