// DO NOT edit this directly in functions/src/domain. (i.e. Firebase Functions directory)
// Edit only this in src/domain (i.e. Firebase hosting directory) then copy it to functions/src/domain by `npm run build`

import {InvitationInfo} from './Invitation'

//Twitter Cards and Open Graph at https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html

export interface OgpValues {
  readonly twitterCard: string
  readonly twitterSite: string
  readonly twitterCreator: string
  readonly ogURL: string
  readonly ogTitle: string,
  readonly ogDescription: string,
  readonly ogImage: string
  readonly title: string
}

export function toOgpValues(
  invitationInfo: InvitationInfo,
  pageURL: string
): OgpValues {
  return ({
    twitterCard: invitationInfo.twitterCard,
    twitterSite: invitationInfo.twitterSite,
    twitterCreator: '@' + invitationInfo.twitterUserId,
    ogURL: pageURL,
    ogTitle: invitationInfo.title,
    ogDescription: invitationInfo.details,
    ogImage: invitationInfo.imageURL,
    title: invitationInfo.title
  })
}
  