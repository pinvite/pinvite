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