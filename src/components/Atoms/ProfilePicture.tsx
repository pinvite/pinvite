import Avatar from '@material-ui/core/Avatar'
import MuiIcon, { IconProps } from '@material-ui/core/Icon'
import React from 'react'
import styled from 'styled-components'
import MuiTheme from '../../theme/MuiTheme'
import Atom from './Atom'

export interface ProfilePictureProps {
  photoURL: string
  className?: string // allow styled-components to inject CSS margin from outside. Only margin, no other CSS property from outside.
}

const ProfilePicture: React.SFC<ProfilePictureProps> = props => (
  // Important to accept the className prop, to inject CSS margin from outside.</Atom>
  // Only margin, no other CSS property from outside.
  <Atom className={props.className}>
    <Avatar src={props.photoURL} data-cy="profile-picture" />
  </Atom>
)

export default ProfilePicture
