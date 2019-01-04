import React from 'react'
import styled from 'styled-components'
import { InvitationInfo, isInvitationInfo } from '../../domain/Invitation'
import {
  OgpValues,
  toOgpValues,
  UninitializedOgpValues,
} from '../../domain/OgpValues'
import firebase, { firestore } from '../../utils/firebase'
import ContactInstruction from '../Atoms/ContactInstruction'
import Details from '../Atoms/Details'
import OgpMetaTags from '../Atoms/OgpMetaTags'
import ImageLoader, { ImageLoaderProps } from '../Molecules/ImageLoader'
import InvitationBottom from '../Molecules/InvitationBottom'

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
const DetailsStyled = styled(Details)`
  && {
    margin-bottom: 16px;
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

  renderDetails() {
    if (this.state.invitationInfo) {
      return (
        <React.Fragment>
          <DetailsStyled text={this.state.invitationInfo.details} />
          <ContactInstruction text={`この勉強会の講師をできる、という方は投稿者 @${this.state.invitationInfo.twitterUserId} さんにTwitterのDMもしくはリプライで連絡しましょう！` } />
          <InvitationBottom
            twitterUserId={this.state.invitationInfo.twitterUserId}
          />
        </React.Fragment>
      )
    } else {
      return <React.Fragment />
    }
  }

  render() {
    return (
      <React.Fragment>
        <OgpMetaTags {...this.state.ogpValues} />
        <ImageLoaderStyled
          previewImageURL={this.props.previewImageURL}
          imageURL={this.state.ogpValues.ogImage}
        />
        {this.renderDetails()}
      </React.Fragment>
    )
  }
}

export default Invitation
