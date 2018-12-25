// DO NOT edit this directly in functions/src/domain. (i.e. Firebase Functions directory)
// Edit only this in src/domain (i.e. Firebase hosting directory) then copy it to functions/src/domain by `npm run build`

import {WorkshopPromotion} from './Promotion'

//Twitter Cards and Open Graph at https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html

export interface OgpValues {
  readonly twitterCard: string
  readonly twitterSite: string
  readonly twitterCreater: string
  readonly ogURL: string
  readonly ogTitle: string,
  readonly ogDescription: string,
  readonly ogImage: string
}

export function toOgpValues(
  promotion: WorkshopPromotion,
  pageURL: string
): OgpValues {
  return ({
    twitterCard: promotion.twitterCard,
    twitterSite: promotion.twitterSite,
    twitterCreater: '@' + promotion.twitterUserId,
    ogURL: pageURL,
    ogTitle: promotion.title,
    ogDescription: promotion.details,
    ogImage: promotion.imageURL,
  })
}
  