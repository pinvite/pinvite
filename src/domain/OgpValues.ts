// DO NOT edit this directly in functions/src/domain. (i.e. Firebase Functions directory)
// Edit only this in src/domain (i.e. Firebase hosting directory) then copy it to functions/src/domain by `npm run build`

import xss from 'xss'
import { InvitationInfo } from './Invitation'

// Twitter Cards and Open Graph at https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html

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
    twitterCard: xss(invitationInfo.twitterCard),
    twitterSite: '@' + xss(invitationInfo.twitterSiteOwnerId),
    twitterCreator: '@' + xss(invitationInfo.twitterUserId),
    ogURL: xss(invitationInfo.pageURL),
    ogTitle: xss(invitationInfo.title),
    ogDescription: xss(invitationInfo.details),
    ogImage: xss(invitationInfo.imageURL),
    title: xss(invitationInfo.title),
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
