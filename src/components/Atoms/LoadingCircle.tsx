import CircularProgress, {
  CircularProgressProps,
} from '@material-ui/core/CircularProgress'
import Modal, { ModalProps } from '@material-ui/core/Modal'
import Paper, { PaperProps } from '@material-ui/core/Paper'
import React from 'react'
import styled from 'styled-components'
import MuiTheme from '../../theme/MuiTheme'
import Atom from './Atom'
import { Subtitle2Centered } from './Description'

export interface LoadingCircleProps {
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const LoadingCircle: React.SFC<LoadingCircleProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.</Atom>
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <CircularProgress />
  </Atom>
)

export default LoadingCircle
