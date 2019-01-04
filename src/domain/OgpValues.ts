// DO NOT edit this directly in functions/src/domain. (i.e. Firebase Functions directory)
// Edit only this in src/domain (i.e. Firebase hosting directory) then copy it to functions/src/domain by `npm run build`

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

const REGEXP_AMPERSAND = /\&/g
const REGEXP_LT = /</g
const REGEXP_GT = />/g
const REGEXP_DOUBLE_QUOTE = /"/g
const REGEXP_SINGLE_QUOTE = /'/g
const REGEXP_SLASH = /\//g

function sanitize(untrustedAttribute: string): string {
  return untrustedAttribute
    .replace(REGEXP_AMPERSAND, '&amp;')
    .replace(REGEXP_LT, '&lt;')
    .replace(REGEXP_GT, '&gt;')
    .replace(REGEXP_DOUBLE_QUOTE, '&quot;')
    .replace(REGEXP_SINGLE_QUOTE, '&#x27;')
    .replace(REGEXP_SLASH, '&#x2F;')
}

export function toOgpValues(invitationInfo: InvitationInfo): OgpValues {
  return {
    twitterCard: sanitize(invitationInfo.twitterCard),
    twitterSite: '@' + sanitize(invitationInfo.twitterSiteOwnerId),
    twitterCreator: '@' + sanitize(invitationInfo.twitterUserId),
    ogURL: sanitize(invitationInfo.pageURL),
    ogTitle: sanitize(invitationInfo.title),
    ogDescription: sanitize(invitationInfo.details),
    ogImage: sanitize(invitationInfo.imageURL),
    title: sanitize(invitationInfo.title),
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
