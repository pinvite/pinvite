import React from 'react'
import OgpMetaTags from '../Atoms/OgpMetaTags';
import FullWidthImg from '../Atoms/FullWidthImage';
import Details from '../Atoms/Details';
import {toOgpValues, OgpValues, UninitializedOgpValues} from '../../domain/OgpValues'
import {InvitationInfo, isInvitationInfo} from '../../domain/Invitation'
import firebase, {firestore} from '../../utils/firebase'
import ImageLoader from '../Molecules/ImageLoader';

export interface InvitationProps {
  previewImageURL: string
  firebaseUserId: string
  invitationId: string
}

async function retrieveInvitation(
  firebaseUserId: string,
  invitationId: string
): Promise<InvitationInfo> {
  const snapshot = await firestore
    .collection('users').doc(firebaseUserId)
    .collection('invitations').doc(invitationId).get()

  const invitation = snapshot.data()
  if(isInvitationInfo(invitation))
    return invitation
  else
    throw new Error('Failed to retrieve invitation')
}

class Invitation extends React.Component<InvitationProps, OgpValues> {
  constructor(props: InvitationProps){
    super(props)
    this.state = UninitializedOgpValues
  }

  componentDidMount(){
    retrieveInvitation(this.props.firebaseUserId, this.props.invitationId)
      .then((invitationInfo) => {
        if(window) {
          const pageURL = window.location.href
          const ogpValues = toOgpValues(invitationInfo, pageURL)
          this.setState(ogpValues)
        }
      }).catch((error) => {
        console.log(error)
      })
  }

  render() {
    return(
      <React.Fragment>
        <OgpMetaTags
          {...this.state}
        />
        <ImageLoader
          previewImageURL={this.props.previewImageURL}
          imageURL={this.state.ogImage}
        />
        <Details text={this.state.ogDescription}/>
      </React.Fragment>      
    )
  }
}

export default Invitation