import { navigate } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import { AuthStatusContext, LoginStatus } from '../../context/AuthStatusContext'
import AppName from '../Atoms/AppName'
import ProfilePicture, { ProfilePictureProps } from '../Atoms/ProfilePicture'

export interface ApplicationBarProps {
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ProfilePictureStyled = styled(ProfilePicture as React.SFC<ProfilePictureProps>)`
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
        if (loginStatus === LoginStatus.LoggedIn && userInfo ) {
          return (
            <FlexContainer>
              <AppName
                onClick={() => {
                  navigate('/')
                }}
              />
              <ProfilePictureStyled photoURL={userInfo.photoURL} />
            </FlexContainer>
          )
        } else {
          return (
            <AppName
              onClick={() => {
                navigate('/')
              }}
            />
          )
        }
      }}
    </AuthStatusContext.Consumer>
  </AppBar>
)

export default ApplicationBar
