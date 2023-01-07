import { inject, reactive } from 'vue'

const authKey = Symbol(process.env.NODE_ENV !== 'production' ? 'auth' : '')

function createAuth(options) {
  const { router, routes, userService } = options
  const reactiveUser = reactive({})

  function resolveLoginPath({ fullPath }) {
    return {
      path: routes.login,
      query: { redirect: fullPath !== '/' ? fullPath : undefined },
    }
  }

  // Go to redirect page
  function toRedirect() {
    const { query } = router.currentRoute.value
    router.push({ path: query.redirect || '/' })
  }

  // Go to login page and attach redirect to previous page
  function toLogin() {
    router.push(resolveLoginPath(router.currentRoute.value))
  }

  function assign({ user }) {
    Object.assign(reactiveUser, user)
  }

  // TODO: Check if nested routes needs to be handled
  function handleRoute(to, from) {
    const { auth } = to.meta

    // Redirect to the login page if not authenticated
    if (auth && !reactiveUser.authenticated && to.path !== routes.login) {
      return resolveLoginPath(to)
    }

    // Keep current route if the page is hidden from authenticated
    if (!auth && reactiveUser.authenticated) {
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
      const auth = this

      app.config.globalProperties.$auth = auth
      app.provide(authKey, auth)

      router.beforeEach(handleRoute)

      userService.on('login', assign, toRedirect)
      userService.on('logout', assign, toLogin)
      userService.on('register', assign, toRedirect)
    },
  }
}

function useAuth() {
  return inject(authKey)
}

export { createAuth, useAuth }
