import type { RouteLocationNormalizedGeneric } from "vue-router"
import { isString } from "@@/utils/validate"

export const useKeepAliveStore = defineStore("keep-alive", () => {
  const cachedRoutes = ref<string[]>([])

  const addCachedRoute = (route: RouteLocationNormalizedGeneric) => {
    const keepAlive = route.meta.keepAlive
    const name = route.name
    if (keepAlive && name && isString(name) && !cachedRoutes.value.includes(name)) {
      cachedRoutes.value.push(name)
    }
  }

  const delAllCachedRoutes = () => {
    cachedRoutes.value = []
  }

  return { cachedRoutes, addCachedRoute, delAllCachedRoutes }
})
