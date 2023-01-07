import { inject, reactive } from 'vue'

const authKey = Symbol(process.env.NODE_ENV !== 'production' ? 'auth' : '')
const authStorageKey = 'auth.user'

function createAuth(options) {
  const { router, routes } = options

  const user = reactive({
    authenticated: !!window.localStorage.getItem(authStorageKey),
    username: window.localStorage.getItem(authStorageKey),
  })

  function createLoginPath({ fullPath }) {
    return {
      path: routes.login,
      query: { redirect: fullPath !== '/' ? fullPath : undefined },
    }
  }

  async function login(credentials) {
    if (!credentials.username || !credentials.password) {
      return
    }

    user.authenticated = true
    user.username = credentials.username
    window.localStorage.setItem(authStorageKey, credentials.username)
    // Redirect to queried path or homepage
    router.push({ path: router.currentRoute.value.query.redirect || '/' })
  }

  async function logout() {
    user.authenticated = false
    window.localStorage.removeItem('auth')
    // Redirect to login page with last path to redirect after
    router.push(createLoginPath(router.currentRoute.value))
  }

  async function register(credentials) {
    // console.log('Register', ...credentials)
    return credentials
  }

  // TODO: Check if nested routes needs to be handled
  function handleRoute(to, from) {
    const { auth } = to.meta

    // Redirect to the login page if not authenticated
    if (auth && !user.authenticated && to.path !== routes.login) {
      return createLoginPath(to)
    }

    // Keep current route if the page is hidden from authenticated
    if (!auth && user.authenticated) {
      return from.path
    }

    return true
  }

  return {
    user,
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
