import React from 'react'
import styled from 'styled-components'
import Atom from './Atom';

export interface FullWidthImageProps {
  className?: string,
}

const FullWidthImg = styled.img`
  width: 100%;
`

// TODO: enclose this in <Atom></Atom>
const SampleImage: React.SFC<FullWidthImageProps> = (props) =>
  <Atom className={props.className}>
    <FullWidthImg src='https://res.cloudinary.com/pinvite/image/upload/v1544140298/invite-sample.png' />
  </Atom>

export default SampleImage
