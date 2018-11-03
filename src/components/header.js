import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {font, Header2} from './style-typography'
import palette from './style-palette'

const HeaderContainer = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  padding: 8px 0;
  ${font}
  color: ${palette.textColor};
`

const Logo = styled.p``


const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Logo>Pinvite</Logo>
  </HeaderContainer>
)

export default Header
