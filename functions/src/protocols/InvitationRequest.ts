// DO NOT edit this directly in functions/src/protocols. (i.e. Firebase Functions directory)
// Edit only this in src/protocols (i.e. Firebase hosting directory) then copy it to functions/src/domain by `npm run build`

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