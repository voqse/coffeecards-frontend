import { inject, reactive } from 'vue'

const authKey = Symbol(process.env.NODE_ENV !== 'production' ? 'auth' : '')

function createAuth(options) {
  const { router, routes, userService } = options
  const reactiveUser = reactive({})

  function createLoginPath({ fullPath }) {
    return {
      path: routes.login,
      query: { redirect: fullPath !== '/' ? fullPath : undefined },
    }
  }

  function redirectAfterLogin() {
    const { query } = router.currentRoute.value
    router.push({ path: query.redirect || '/' })
  }

  function redirectAfterLogout() {
    router.push(createLoginPath(router.currentRoute.value))
  }

  async function login(credentials) {
    const { user } = userService.login(credentials, redirectAfterLogin)
    Object.assign(reactiveUser, user)
  }

  async function logout() {
    const { user } = userService.logout(redirectAfterLogout)
    Object.assign(reactiveUser, user)
  }

  async function register(credentials) {
    const { user } = userService.register(credentials, redirectAfterLogin)
    Object.assign(reactiveUser, user)
  }

  // TODO: Check if nested routes needs to be handled
  function handleRoute(to, from) {
    const { auth } = to.meta

    // Redirect to the login page if not authenticated
    if (auth && !reactiveUser.authenticated && to.path !== routes.login) {
      return createLoginPath(to)
    }

    // Keep current route if the page is hidden from authenticated
    if (!auth && reactiveUser.authenticated) {
      return from.path
    }

    return true
  }

  return {
    user: reactiveUser,
    login,
    logout,
    register,
    install(app) {
      const auth = this

      // eslint-disable-next-line no-param-reassign
      app.config.globalProperties.$auth = auth
      app.provide(authKey, auth)

      router.beforeEach(handleRoute)
    },
  }
}

function useAuth() {
  return inject(authKey)
}

export { createAuth, useAuth }
