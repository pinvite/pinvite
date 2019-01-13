import Img, { FluidObject } from 'gatsby-image'
import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Paper } from '@material-ui/core'
import { PaperProps } from '@material-ui/core/Paper'
import MuiTheme from '../../theme/MuiTheme'
import { Body2Left, H6Left } from '../Atoms/Description'

export interface HowToStepProps {
  title: string
  imgFluid: FluidObject
  instruction: string
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const PaperStyled = styled(Paper as React.SFC<PaperProps>)`
  && {
    background-color: ${MuiTheme.palette.secondary.dark};
  }
`

const ImgLayout = styled.div`
  display: flex;
  justify-content: center;
`

const ImgContainer = styled.div`
  width: 400px;
`

const HowToStep: React.SFC<HowToStepProps> = props => (
  <PaperStyled elevation={0} className={props.className}>
    <H6Left description={props.title} />
    <ImgLayout>
      <ImgContainer>
        <Img fluid={props.imgFluid} />
      </ImgContainer>
    </ImgLayout>
    <Body2Left description={props.instruction} />
  </PaperStyled>
)

export default HowToStep
