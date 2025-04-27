import type * as Auth from "./type"
import { request2 } from "@/http/axios"
/** 登录并返回 Token */
export function loginApi(data: Auth.LoginRequestData) {
  return request2<Auth.LoginResponseData>({
    url: "users/login",
    method: "post",
    data
  })
}
