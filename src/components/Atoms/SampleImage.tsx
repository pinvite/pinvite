import React from 'react'
import styled from 'styled-components'

const FullWidthImg = styled.img`
  width: 100%;
`

// TODO: enclose this in <Atom></Atom>
const SampleImage = () =>
  <FullWidthImg src='https://res.cloudinary.com/pinvite/image/upload/v1544140298/invite-sample.png' />

export default SampleImage
