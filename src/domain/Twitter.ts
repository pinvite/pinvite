// DO NOT edit this directly in functions/src/domain. (i.e. Firebase Functions directory)
// Edit only this in src/domain (i.e. Firebase hosting directory) then copy it to functions/src/domain by `npm run build`

export const defaultTwitterPhotoURL = 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'

export interface TwitterUserInfo {
  readonly userId: string
  readonly oauthToken: string
  readonly oauthTokenSecret: string
}

export function isTwitterUserInfo(obj: any): obj is TwitterUserInfo {
  // User-defined Type Guards at https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
  const userInfo = obj as TwitterUserInfo
  return (
    userInfo.userId !== undefined &&
    userInfo.oauthToken !== undefined &&
    userInfo.oauthTokenSecret !== undefined
  )
}
