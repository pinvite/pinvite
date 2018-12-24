import {WorkshopPromotion} from './Promotion'


export interface TwitterCard {
  readonly twitterCard: string
  readonly twitterSite: string
  readonly twitterCreater: string
  readonly ogURL: string
  readonly ogTitle: string,
  readonly ogDescription: string,
  readonly ogImage: string
}

export function toTwitterCard(
  promotion: WorkshopPromotion,
  twitterUserName: string,
  pageURL: string
) {
  return ({
    twitterCard: 'summary_large_image',
    twitterSite: '@orgpinvite',
    twitterCreater: '@' + twitterUserName,
    ogURL: pageURL,
    ogTitle: promotion.title,
    ogDescription: promotion.details,
    ogImage: promotion.imageURL,
  })
}

export interface TwitterUserInfo {
  userId: string
  oauthToken: string
  oauthTokenSecret: string
}

export function isTwitterUserInfo(obj: any): obj is TwitterUserInfo {
  // User-defined Type Guards at https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
  const userInfo = obj as TwitterUserInfo
  return (
    userInfo.userId !== undefined
    && userInfo.oauthToken !== undefined
    && userInfo.oauthTokenSecret !== undefined
  )
}