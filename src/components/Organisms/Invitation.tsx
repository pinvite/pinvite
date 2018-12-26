import React from 'react'
import OgpMetaTags from '../Atoms/OgpMetaTags';
import FullWidthImg from '../Atoms/FullWidthImage';
import Details from '../Atoms/Details';
import {toOgpValues, OgpValues} from '../../domain/OgpValues'
import {InvitationInfo, isInvitationInfo} from '../../domain/Invitation'
import firebase, {firestore} from '../../utils/firebase'

export interface InvitationProps {
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
    this.state = {
      twitterCard:    '*|twitter:card|*',
      twitterSite:    '*|twitter:site|*',
      twitterCreator: '*|twitter:creator|*',
      ogURL:          '*|og:url|*',
      ogTitle:        '*|og:title|*' ,
      ogDescription:  '*|og:description|*',
      ogImage:        '*|og:image|*',
      title:          '*|title|*'
    }
  }

  componentDidMount(){
    retrieveInvitation(this.props.firebaseUserId, this.props.invitationId)
      .then((invitationInfo) => {
        console.log('s6dfs4f56dsf56ds564s5f4sd54f5sd45sd4f56d4s')
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
        <FullWidthImg src={this.state.ogURL} />
        <Details text={this.state.ogDescription}/>
      </React.Fragment>      
    )
  }
}

export default Invitation