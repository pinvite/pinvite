import AppBar from '@material-ui/core/AppBar'
import { navigate } from 'gatsby'
import React from 'react'
import AppName from '../Atoms/AppName'

export interface ApplicationBarProps {
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const ApplicationBar: React.SFC<ApplicationBarProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <AppBar className={props.className} color="secondary" position="relative">
    <AppName
      onClick={() => {
        navigate('/')
      }}
    />
  </AppBar>
)

export default ApplicationBar
