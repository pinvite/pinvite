import Modal, { ModalProps } from '@material-ui/core/Modal'
import React from 'react'
import styled from 'styled-components'
import LoadingIndicator from '../Molecules/LoadingIndicator'

export interface ModalLoadingProps {
  open: boolean
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const ModalStyled = styled(Modal as React.SFC<ModalProps>)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const ModalLoading: React.SFC<ModalLoadingProps> = props => (
  <ModalStyled open={props.open}>
    <LoadingIndicator />
  </ModalStyled>
)

export default ModalLoading
