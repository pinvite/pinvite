// DO NOT edit this directly in functions/src/protocols. (i.e. Firebase Functions directory)
// Edit only this in src/protocols (i.e. Firebase hosting directory) then copy it to functions/src/domain by `npm run build`

export interface InvitationResponse {
  readonly twitterCard: string
  readonly twitterSiteOwnerId: string
  readonly twitterUserId: string
  readonly title: string
  readonly details: string
  readonly time: number
  readonly moneyAmount: number
  readonly imageURL: string
  readonly tweetURL: string
  readonly pageURL: string
  readonly userId: string
  readonly invitationId: string
}

export function isInvitationResponse(obj: any): obj is InvitationResponse {
  // User-defined Type Guards at https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
  const response = obj as InvitationResponse
  return (
    response.twitterCard !== undefined &&
    response.twitterSiteOwnerId !== undefined &&
    response.twitterUserId !== undefined &&
    response.title !== undefined &&
    response.details !== undefined &&
    response.time !== undefined &&
    response.moneyAmount !== undefined &&
    response.imageURL !== undefined &&
    response.tweetURL !== undefined &&
    response.pageURL !== undefined &&
    response.userId !== undefined &&
    response.invitationId !== undefined
  )
}
