// 统一处理 Cookie

import { CacheKey } from "@@/constants/cache-key"
import Cookies from "js-cookie"

export function getToken() {
  return Cookies.get(CacheKey.TOKEN)
}

export function setToken(token: string) {
  Cookies.set(CacheKey.TOKEN, token)
}

export function removeToken() {
  Cookies.remove(CacheKey.TOKEN)
}

export function getJwt() {
  return Cookies.get(CacheKey.JWT)
}

export function setJwt(jwt: string) {
  Cookies.set(CacheKey.JWT, jwt)
}

export function removeJwt() {
  Cookies.remove(CacheKey.JWT)
}
