import { Button, Menu, MenuItem } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Icon from '@material-ui/core/Icon'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
import styled from 'styled-components'
import { AuthStatusContext, LoginStatus } from '../../context/AuthStatusContext'
import MuiTheme from '../../theme/MuiTheme'
import AlphaRelease from '../Atoms/AlphaRelease'
import AppName from '../Atoms/AppName'
import Atom from '../Atoms/Atom'
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

const FlexContainer = styled.div`
  && {
    display: flex;
    align-items: center;
    padding: ${MuiTheme.spacing.unit / 2}px;
  }
`
const DesktopMenu = styled.div`
  && {
    display: flex;
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
`

const MobileMenu = styled.div`
  && {
    display: none;
    @media only screen and (max-width: 600px) {
      display: block;
    }
  }
`

interface ApplicationBarState {
  anchorEl: any
}

class ApplicationBar extends React.Component<
  ApplicationBarProps,
  ApplicationBarState
> {
  constructor(props: ApplicationBarProps) {
    super(props)
    this.state = { anchorEl: null }
  }

  handleMenuOpen = (event: any) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    return (
      // Important to accept the className prop, to inject CSS margin from outside.
      // Only margin, no other CSS property from outside.
      <AppBar
        className={this.props.className}
        color="secondary"
        position="relative"
        data-cy="app-bar"
      >
        <FlexContainer>
          <AppName />
          <AlphaRelease />
          <DesktopMenu>
            <TermsAndConditionsLink />
            <HowToUseLink />
          </DesktopMenu>
          <SpacingDiv />
          <MobileMenu>
            <Button onClick={this.handleMenuOpen}>
              <Icon>menu</Icon>
            </Button>
            <Menu
              anchorEl={this.state.anchorEl}
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleMenuClose}
            >
              <MenuItem>
                <TermsAndConditionsLink />
              </MenuItem>
              <MenuItem>
                <HowToUseLink />
              </MenuItem>
            </Menu>
          </MobileMenu>
          <AuthStatusContext.Consumer>
            {({ loginStatus, userInfo }) => {
              if (loginStatus === LoginStatus.LoggedIn && userInfo) {
                return <ProfilePictureStyled photoURL={userInfo.photoURL} />
              } else {
                return <React.Fragment />
              }
            }}
          </AuthStatusContext.Consumer>
        </FlexContainer>
      </AppBar>
    )
  }
}

export default ApplicationBar
