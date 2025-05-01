import type * as Users from "./type"
import { request2 } from "@/http/axios"

/** 获取当前登录用户详情 */
export function getCurrentUserApi() {
  return request2<Users.CurrentUserResponseData>({
    url: "users/me",
    method: "get"
  })
}
