// DO NOT edit this directly in functions/src/domain. (i.e. Firebase Functions directory)
// Edit only this in src/domain (i.e. Firebase hosting directory) then copy it to functions/src/domain by `npm run build`

import { InvitationInfo } from './Invitation'

//Twitter Cards and Open Graph at https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html

export interface OgpValues {
  readonly twitterCard: string
  readonly twitterSite: string
  readonly twitterCreator: string
  readonly ogURL: string
  readonly ogTitle: string
  readonly ogDescription: string
  readonly ogImage: string
  readonly title: string
}

export function toOgpValues(invitationInfo: InvitationInfo): OgpValues {
  return {
    twitterCard: invitationInfo.twitterCard,
    twitterSite: '@' + invitationInfo.twitterSiteOwnerId,
    twitterCreator: '@' + invitationInfo.twitterUserId,
    ogURL: invitationInfo.pageURL,
    ogTitle: invitationInfo.title,
    ogDescription: invitationInfo.details,
    ogImage: invitationInfo.imageURL,
    title: invitationInfo.title,
  }
}

export const UninitializedOgpValues: OgpValues = {
  twitterCard: '*|twitter:card|*',
  twitterSite: '*|twitter:site|*',
  twitterCreator: '*|twitter:creator|*',
  ogURL: '*|og:url|*',
  ogTitle: '*|og:title|*',
  ogDescription: '*|og:description|*',
  ogImage: '*|og:image|*',
  title: '*|title|*',
}
