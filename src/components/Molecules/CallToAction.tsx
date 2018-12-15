import React,  {Fragment} from 'react'
import styled from 'styled-components'
import {DescriptionProps, H3Centered, H4Left} from '../Atoms/Description'
import PrimaryButton, { PrimaryButtonProps } from '../Atoms/PrimaryButton'
import {AuthStatusContext} from '../../context/AuthStatusContext'

export interface CallToActionProp {
  description: React.ReactNode,
  buttonText: string,
  className?: string
}

const H3CenteredStyled = styled(H3Centered as React.SFC<DescriptionProps>)`
&& {
  margin-bottom: 80px;
}`

const H4LeftStyled = styled(H4Left as React.SFC<DescriptionProps>)`
&& {
  margin-bottom: 80px;
}`

export const CallToActionTop: React.SFC<CallToActionProp> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.</Atom>
  // Only margin, no other CSS property from outside.
  <div className={props.className}>
    <H3CenteredStyled description={props.description} />
    <AuthStatusContext.Consumer>
      {
        ({handleLogin}) => 
          <PrimaryButton text={props.buttonText} callback={handleLogin} />
      }
    </AuthStatusContext.Consumer>    
  </div>

export const CallToActionBottom: React.SFC<CallToActionProp> = (props) =>
  // Important to accept the className prop, to inject CSS margin from outside.</Atom>
  // Only margin, no other CSS property from outside.
  <div className={props.className}>
    <H4LeftStyled description={props.description} />
    <AuthStatusContext.Consumer>
      {
        ({handleLogin}) => 
          <PrimaryButton text={props.buttonText} callback={handleLogin} />
      }
    </AuthStatusContext.Consumer>    
  </div>
