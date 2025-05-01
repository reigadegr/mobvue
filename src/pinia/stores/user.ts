import { getCurrentUserApi } from "@@/apis/users"
import {setToken as _setToken, getToken, removeToken, setJwt} from "@@/utils/cache/cookies"

export const useUserStore = defineStore("user", () => {
  const token = ref<string>(getToken() || "")

  const roles = ref<string[]>([])

  const username = ref<string>("")

  const jwt = ref<string>("")

  // 设置 Token
  const setToken = (token_value: string, jwt_value: string) => {
    _setToken(token_value)
    token.value = token_value
    setJwt(jwt_value)
    jwt.value = jwt_value
  }

  // 获取用户详情
  const getInfo = async () => {
    const { data } = await getCurrentUserApi()
    username.value = data.username
    roles.value = data.roles
  }

  const changeRoles = (role: string) => {
    const newToken = `token-${role}`
    token.value = newToken
    _setToken(newToken)
    // 用刷新页面代替重新登录
    location.reload()
  }

  // 重置 Token
  const resetToken = () => {
    removeToken()
    token.value = ""
    roles.value = []
  }

  return { token, roles, username, setToken, getInfo, changeRoles, resetToken }
})
