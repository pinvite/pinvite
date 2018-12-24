export interface WorkshopPromotion {
  readonly twitterCard: 'summary' | 'summary_large_image' | 'app' | 'player'
  readonly twitterSite: '@orgpinvite' 
  readonly title: string
  readonly details: string
  readonly time: number
  readonly moneyAmount: number
  readonly imageURL: string
}
