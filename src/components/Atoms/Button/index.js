import react from 'react'
import styled from 'styled-components'
import palette from '../../style-palette'
import {darken} from 'polished'

export const ButtonMain = styled.button`
  background: ${palette.green};
  color: #fff;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 24px;
  border: unset;
  text-shadow: 0 1px 2px ${darken(0.1, palette.green)};
`

export const ButtonTwitter = styled.button`
  background: ${palette.blueTwitter};
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 24px;
  border: unset;
  text-shadow: 0 2px 5px ${darken(0.1, palette.blueTwitter)};
`