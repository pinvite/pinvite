import React from 'react'
import styled from 'styled-components'
import { InvitationInfo, isInvitationInfo } from '../../domain/Invitation'
import {
  OgpValues,
  toOgpValues,
  UninitializedOgpValues,
} from '../../domain/OgpValues'
import firebase, { firestore } from '../../utils/firebase'
import Details from '../Atoms/Details'
import OgpMetaTags from '../Atoms/OgpMetaTags'
import ImageLoader, { ImageLoaderProps } from '../Molecules/ImageLoader'

export interface InvitationProps {
  previewImageURL: string
  firebaseUserId: string
  invitationId: string
}

const ImageLoaderStyled = styled(ImageLoader)`
  && {
    margin-top: 80px;
  }
`

async function retrieveInvitation(
  firebaseUserId: string,
  invitationId: string
): Promise<InvitationInfo> {
  const snapshot = await firestore
    .collection('users')
    .doc(firebaseUserId)
    .collection('invitations')
    .doc(invitationId)
    .get()

  const invitation = snapshot.data()
  if (isInvitationInfo(invitation)) {
    return invitation
  } else {
    throw new Error('Failed to retrieve invitation')
  }
}

interface InvitationState {
  invitationInfo?: InvitationInfo
  ogpValues: OgpValues
}

class Invitation extends React.Component<InvitationProps, InvitationState> {
  constructor(props: InvitationProps) {
    super(props)
    this.state = {
      ogpValues: UninitializedOgpValues,
    }
  }

  componentDidMount() {
    retrieveInvitation(this.props.firebaseUserId, this.props.invitationId)
      .then(invitationInfo => {
        if (window) {
          const ogpValues = toOgpValues(invitationInfo)
          this.setState({ ogpValues, invitationInfo })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const details = this.state.invitationInfo ? (
      <Details text={this.state.invitationInfo.details} />
    ) : (
      <React.Fragment />
    )
    return (
      <React.Fragment>
        <OgpMetaTags {...this.state.ogpValues} />
        <ImageLoaderStyled
          previewImageURL={this.props.previewImageURL}
          imageURL={this.state.ogpValues.ogImage}
        />
        {details}
      </React.Fragment>
    )
  }
}

export default Invitation
