import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
import styled from 'styled-components'
import { AuthStatusContext, LoginStatus } from '../../context/AuthStatusContext'
import AlphaRelease from '../Atoms/AlphaRelease'
import AppName from '../Atoms/AppName'
import HowToUseLink from '../Atoms/HowToUseLink'
import ProfilePicture, { ProfilePictureProps } from '../Atoms/ProfilePicture'
import TermsAndConditionsLink from '../Atoms/TermsAndConditionsLink'

export interface ApplicationBarProps {
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

// A CSS technique to constrain the components after this "from the right"
// The same technique used at: https://material-ui.com/demos/app-bar/#app-bar-with-a-primary-search-field
const SpacingDiv = styled.div`
  flex-grow: 1;
`

const ProfilePictureStyled = styled(ProfilePicture as React.SFC<
  ProfilePictureProps
>)`
  && {
    margin-top: auto;
    margin-bottom: auto;
  }
`

const ApplicationBar: React.SFC<ApplicationBarProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.
  // Only margin, no other CSS property from outside.
  <AppBar
    className={props.className}
    color="secondary"
    position="relative"
    data-cy="app-bar"
  >
    <AuthStatusContext.Consumer>
      {({ loginStatus, userInfo }) => {
        if (loginStatus === LoginStatus.LoggedIn && userInfo) {
          return (
            <Toolbar>
              <AppName />
              <AlphaRelease />
              <TermsAndConditionsLink />
              <HowToUseLink />
              <SpacingDiv />
              <ProfilePictureStyled photoURL={userInfo.photoURL} />
            </Toolbar>
          )
        } else {
          return (
            <Toolbar>
              <AppName />
              <AlphaRelease />
              <TermsAndConditionsLink />
              <HowToUseLink />
            </Toolbar>
          )
        }
      }}
    </AuthStatusContext.Consumer>
  </AppBar>
)

export default ApplicationBar
