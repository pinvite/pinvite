export interface TwitterUserInfo {
  readonly userId: string
  readonly oauthToken: string
  readonly oauthTokenSecret: string
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