import React from 'react'
import styled from 'styled-components'
import Atom from './Atom';

export interface FullWidthImageProps {
  src: string,
  className?: string,
}

const ImgStyled = styled.img`
&& {
  width: 100%;
}`

// TODO: enclose this in <Atom></Atom>
const FullWidthImg: React.SFC<FullWidthImageProps> = (props) =>
  <Atom className={props.className}>
    <ImgStyled src={props.src} />
  </Atom>

export default FullWidthImg
