// DO NOT edit this directly in functions/src/domain. (i.e. Firebase Functions directory)
// Edit only this in src/domain (i.e. Firebase hosting directory) then copy it to functions/src/domain by `npm run build`

export interface InvitationInfo {
  readonly twitterCard: 'summary' | 'summary_large_image' | 'app' | 'player'
  readonly twitterSite: '@orgpinvite'
  readonly twitterUserId: string
  readonly title: string
  readonly details: string
  readonly time: number
  readonly moneyAmount: number
  readonly imageURL: string
}

export function isInvitationInfo(obj: any): obj is InvitationInfo {
  // User-defined Type Guards at https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
  const promotion = obj as InvitationInfo
  return (
    promotion.twitterCard !== undefined
    && promotion.twitterSite !== undefined
    && promotion.twitterUserId !== undefined
    && promotion.title !== undefined
    && promotion.details !== undefined
    && promotion.time !== undefined
    && promotion.moneyAmount !== undefined
    && promotion.imageURL !== undefined
  )
}

// It is an HTTP request body structure, not actually a domain object though... 
export interface InvitationRequest {
  readonly title: string
  readonly details: string
  readonly time: number
  readonly moneyAmount: number
  readonly imageURL: string
}

export function isInvitationRequest(obj: any): obj is InvitationRequest {
  // User-defined Type Guards at https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
  const promotion = obj as InvitationRequest
  return (
    promotion.title !== undefined
    && promotion.details !== undefined
    && promotion.time !== undefined
    && promotion.moneyAmount !== undefined
    && promotion.imageURL !== undefined
  )
}