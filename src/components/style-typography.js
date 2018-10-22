import styled from 'styled-components'

export const Header1 = styled.h1`
  font-weight: 700;
  font-size: 30px;
  color: #34495E;
  line-height: 36px;
  text-align: ${props => props.center ? 'center' : 'left'};
`

export const Header2 = styled.h2`
  font-weight: bold;
  font-size: 24px;
  color: #34495E;
  line-height: 28px;
`

export const Header3 = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #34495E;
  line-height: 28px;
`

export const Header4 = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: #34495E;
  line-height: 28px;
`

export const Body1 = styled.p`
  text-align: center;
`

export const Copyright = styled.p`
  font-size: 16px;
  text-align: center;
`