import Paper, { PaperProps } from '@material-ui/core/Paper'
import React from 'react'
import styled from 'styled-components'
import MuiTheme from '../../theme/MuiTheme'
import { Subtitle2Centered } from '../Atoms/Description'
import LoadingCircle, { LoadingCircleProps } from '../Atoms/LoadingCircle'

export interface ModalWaitingProps {
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const PaperStyled = styled(Paper as React.SFC<PaperProps>)`
  && {
    background-color: ${MuiTheme.palette.secondary.main};
    text-align: center;
  }
`

const LoadingCircleStyled = styled(LoadingCircle as React.SFC<
  LoadingCircleProps
>)`
  && {
    margin-top: ${MuiTheme.spacing.unit / 2}px;
  }
`

const LoadingIndicator: React.SFC<ModalWaitingProps> = props => (
  <PaperStyled>
    <LoadingCircleStyled />
    <Subtitle2Centered description="ツイートを送信中" />
  </PaperStyled>
)

export default LoadingIndicator
