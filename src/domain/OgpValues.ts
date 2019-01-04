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

// https://stackoverflow.com/questions/13246540/html-and-attribute-encoding#answer-33811648
// https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet#Output%20Encoding%20Rules%20Summary
function sanitize(untrustedAttribute: string): string {
  return untrustedAttribute
    .replace(REGEXP_AMPERSAND, '&amp;')
    .replace(REGEXP_LT, '&lt;')
    .replace(REGEXP_GT, '&gt;')
    .replace(REGEXP_DOUBLE_QUOTE, '&quot;')
    .replace(REGEXP_SINGLE_QUOTE, '&#x27;')
    .replace(REGEXP_SLASH, '&#x2F;')
}

// https://security.stackexchange.com/questions/11985/will-javascript-be-executed-which-is-in-an-href#answer-11989
// > <a href="javascript:alert(8007)">Click me</a>
// As in the above SO answer, complex attribute like href is more vulnerable as it can execute JavaScript.
// However, meta tag's content attribute does not execute JavaScript, so following this advice:
//   https://stackoverflow.com/questions/13246540/html-and-attribute-encoding#answer-33811648
//   > Properly quoted attributes can only be escaped with the corresponding quote.
//   https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet#RULE_.232_-_Attribute_Escape_Before_Inserting_Untrusted_Data_into_HTML_Common_Attributes
//   > This should not be used for complex attributes like href, src, style, or any of the event handlers like onmouseover. It is extremely important that event handler attributes should follow Rule #3 for HTML JavaScript Data Values.
// we are sanitizing only a smaller set of characters for URL
function sanitizeQuotes(urlAttribute: string): string {
  return (
    urlAttribute
      // .replace(REGEXP_AMPERSAND, '&amp;') & is valid in URL
      .replace(REGEXP_LT, '&lt;')
      .replace(REGEXP_GT, '&gt;')
      .replace(REGEXP_DOUBLE_QUOTE, '&quot;')
      .replace(REGEXP_SINGLE_QUOTE, '&#x27;')
  )
  // .replace(REGEXP_SLASH, '&#x2F;') slash is valid in URL
}

export function toOgpValues(invitationInfo: InvitationInfo): OgpValues {
  return {
    twitterCard: sanitize(invitationInfo.twitterCard),
    twitterSite: '@' + sanitize(invitationInfo.twitterSiteOwnerId),
    twitterCreator: '@' + sanitize(invitationInfo.twitterUserId),
    ogURL: sanitizeQuotes(invitationInfo.pageURL),
    ogTitle: sanitize(invitationInfo.title),
    ogDescription: sanitize(invitationInfo.details),
    ogImage: sanitizeQuotes(invitationInfo.imageURL),
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
