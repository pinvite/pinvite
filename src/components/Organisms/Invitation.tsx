import React from 'react'
import OgpMetaTags from '../Atoms/OgpMetaTags';
import FullWidthImg from '../Atoms/FullWidthImage';
import Details from '../Atoms/Details';

export interface InvitationProps {
  twitterCard: string
  twitterSite: string
  twitterCreator: string
  ogUrl: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  captionText: string
  detailsText: string
}

const Invitation: React.SFC<InvitationProps> = (props) =>
  <div>
    <OgpMetaTags 
      twitterCard={props.twitterCard}
      twitterSite={props.twitterSite}
      twitterCreator={props.twitterCreator}
      ogUrl={props.ogUrl}
      ogTitle={props.ogTitle}
      ogDescription={props.ogDescription}
      ogImage={props.ogImage}
     />
    <FullWidthImg src={props.ogImage} />
    <Details text={props.detailsText}/>
  </div>

export default Invitation