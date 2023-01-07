function createUserService() {
  const storageKey = 'auth.user'

  const user = {
    authenticated: !!window.localStorage.getItem(storageKey),
    username: window.localStorage.getItem(storageKey),
  }

  function validCredentials(credentials) {
    return credentials.username && credentials.password
  }

  function login(credentials, redirect) {
    if (!validCredentials(credentials)) {
      return
    }

    user.authenticated = true
    user.username = credentials.username
    window.localStorage.setItem(storageKey, credentials.username)
    redirect()

    // eslint-disable-next-line consistent-return
    return self
  }

  function logout(redirect) {
    user.authenticated = false
    window.localStorage.removeItem(storageKey)
    redirect()

    return self
  }

  function register(credentials, redirect) {
    if (!validCredentials(credentials)) {
      return
    }

    user.authenticated = true
    user.username = credentials.username
    redirect()

    // eslint-disable-next-line consistent-return
    return self
  }

  const self = {
    user,
    login,
    logout,
    register,
  }

  return self
}

export default createUserService
