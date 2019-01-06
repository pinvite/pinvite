import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress'
import Modal, { ModalProps } from '@material-ui/core/Modal'
import Paper, { PaperProps } from '@material-ui/core/Paper';
import React from 'react'
import styled from 'styled-components'
import MuiTheme from '../../theme/MuiTheme'
import Atom from './Atom'
import {Subtitle2Centered} from './Description'

export interface ModalWaitingProps {
  open: boolean
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const AtomStyled = styled(Atom)`
  && {
  }
`

const ModalStyled = styled(Modal as React.SFC<ModalProps>)`
&& {
  display: flex;
  justify-content: center;
  align-items: center;
}
`

const PaperStyled = styled(Paper as React.SFC<PaperProps>)`
  && {
    text-align: center;
  }
`

const CircularProgressStyled = styled(CircularProgress as React.SFC<CircularProgressProps>)`
  && {
    margin-top: ${MuiTheme.spacing.unit / 2}px;
    margin-bottom: 20px;
  }
`

const ModalWaiting: React.SFC<ModalWaitingProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.</Atom>
  // Only margin, no other CSS property from outside.
  <AtomStyled className={props.className}>
    <ModalStyled open={props.open}>
      <PaperStyled>
        <CircularProgressStyled />
        <Subtitle2Centered description="ツイートを送信中"/>
      </PaperStyled>
    </ModalStyled>
  </AtomStyled>
)

export default ModalWaiting
