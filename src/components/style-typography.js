import styled from 'styled-components'
import palette from './style-palette'

export const font = `
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
`

export const Header1 = styled.h1`
  font-weight: 700;
  font-size: 30px;
  ${font};
  color: ${palette.textColor};
  line-height: 36px;
  text-align: ${props => props.center ? 'center' : 'left'};
`

export const Header2 = styled.h2`
  font-weight: bold;
  font-size: 24px;
  ${font};
  color: ${palette.textColor};
  line-height: 28px;
`

export const Header3 = styled.h3`
  font-size: 20px;
  font-weight: bold;
  ${font};
  color: ${palette.textColor};
  line-height: 28px;
`

export const Header4 = styled.h4`
  font-size: 16px;
  font-weight: bold;
  ${font};
  color: ${palette.textColor};
  line-height: 28px;
`

export const Body1 = styled.p`
  text-align: center;
  ${font};
`

export const Copyright = styled.p`
  font-size: 16px;
  ${font};
  text-align: center;
`