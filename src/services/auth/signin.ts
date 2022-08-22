import { ApiContext, User } from 'types'

import { fetcher } from 'utils'

export type SigninParams = {
  /**
   * ユーザー名
   * サンプルユーザーのユーザー名は"user"
   */
  username: string
  /**
   * パスワード
   * サンプルユーザーのパスワードは"password"
   */
  password: string
}

/**
 * 認証API（サインイン）
 * @param content APIコンテキスト
 * @param params パラメータ
 * @returns ログインユーザー
 */
const signin = async (
  content: ApiContext,
  params: SigninParams,
): Promise<User> => {
  return await fetcher(
    `${content.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin
