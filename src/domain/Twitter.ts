import {WorkshopPromotion} from './Promotion'


type TwitterUserName = string

export interface TwitterUser {
  userName: TwitterUserName
}

const a: TwitterUser = {
  userName: 'hello'
}

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