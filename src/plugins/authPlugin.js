import { inject, reactive } from 'vue'

const authKey = Symbol(process.env.NODE_ENV !== 'production' ? 'auth' : '')

function createAuth(options) {
  const { router, routes, userService } = options || {}
  const reactiveUser = reactive({ ...userService.user })

  function resolveLoginPath({ fullPath }) {
    return {
      path: routes.login,
      query: { redirect: fullPath !== '/' ? fullPath : undefined },
    }
  }

  function assignUser() {
    Object.assign(reactiveUser, userService.user)
  }

  // Go to redirect page
  function toRedirect() {
    const { query } = router.currentRoute.value
    router.push({ path: query.redirect || '/' })
  }

  // TODO: Check if nested routes needs to be handled
  function handleRoute(to, from) {
    const { requireAuth } = to.meta

    // Redirect to the login page if not authenticated
    if (requireAuth && !reactiveUser.authenticated && to.path !== routes.login) {
      return resolveLoginPath(to)
    }

    // Keep current route if the page is hidden from authenticated
    if (!requireAuth && reactiveUser.authenticated) {
      return from.path
    }

    return true
  }

  return {
    user: reactiveUser,
    login: userService.login,
    logout: userService.logout,
    register: userService.register,
    install(app) {
      const self = this

      app.config.globalProperties.$auth = self
      app.provide(authKey, self)

      router.beforeEach(handleRoute)
      router.addRoute({
        path: routes.logout,
        name: 'logout',
        beforeEnter: (to, from) => {
          userService.logout()
          return resolveLoginPath(from)
        },
        meta: {
          requireAuth: true,
        },
      })

      userService.on('login', assignUser, toRedirect)
      userService.on('logout', assignUser)
      userService.on('register', assignUser, toRedirect)
    },
  }
}

function useAuth() {
  return inject(authKey)
}

export { createAuth, useAuth }
