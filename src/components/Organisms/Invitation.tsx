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

class Invitation extends React.Component<InvitationProps, OgpValues> {
  constructor(props: InvitationProps) {
    super(props)
    this.state = UninitializedOgpValues
  }

  componentDidMount() {
    retrieveInvitation(this.props.firebaseUserId, this.props.invitationId)
      .then(invitationInfo => {
        if (window) {
          const ogpValues = toOgpValues(invitationInfo)
          this.setState(ogpValues)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <React.Fragment>
        <OgpMetaTags {...this.state} />
        <ImageLoaderStyled
          previewImageURL={this.props.previewImageURL}
          imageURL={this.state.ogImage}
        />
        <Details text={this.state.ogDescription} />
      </React.Fragment>
    )
  }
}

export default Invitation
