import AppBar from '@material-ui/core/AppBar'
import { navigate } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { AuthStatusContext, LoginStatus } from '../../context/AuthStatusContext'
import AppName from '../Atoms/AppName'
import ProfilePicture, { ProfilePictureProps } from '../Atoms/ProfilePicture'
import AlphaRelease from '../Atoms/AlphaRelease'
import Toolbar from '@material-ui/core/Toolbar'

export interface ApplicationBarProps {
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

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
  <AppBar className={props.className} color="secondary" position="relative">
    <AuthStatusContext.Consumer>
      {({ loginStatus, userInfo }) => {
        if (loginStatus === LoginStatus.LoggedIn && userInfo) {
          return (
            <Toolbar>
              <AppName
                onClick={() => {
                  navigate('/')
                }}
              />
              <AlphaRelease />
              <SpacingDiv />
              <ProfilePictureStyled photoURL={userInfo.photoURL} />
            </Toolbar>
          )
        } else {
          return (
            <div>
              <AppName
                onClick={() => {
                  navigate('/')
                }}
              />
              <AlphaRelease />
            </div>

          )
        }
      }}
    </AuthStatusContext.Consumer>
  </AppBar>
)

export default ApplicationBar
