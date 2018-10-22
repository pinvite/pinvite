import react from 'react'
import styled from 'styled-components'
import palette from '../../style-palette'
import {darken} from 'polished'

export const ButtonMain = styled.button`
  background: ${palette.green};
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 24px;
`

export const ButtonTwitter = styled.button`
  background: ${palette.blueTwitter};
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 24px;
  text-shadow: 0 2px 5px ${darken(0.1, palette.blueTwitter)};
`