/* eslint-disable no-use-before-define */
import createEventHandler from '@/services/EventHandler'

function validateCredentials(credentials) {
  return (credentials.login || credentials.username || credentials.email) && credentials.password
}

function createUserService(options) {
  const { storageKey = 'auth' } = options || {}
  const { on, emit } = createEventHandler()

  const user = {
    authenticated: !!window.localStorage.getItem(storageKey),
    username: window.localStorage.getItem(storageKey),
    email: null,
  }

  function login(credentials) {
    if (!validateCredentials(credentials)) {
      return self
    }

    user.authenticated = true
    user.username = credentials.login
    window.localStorage.setItem(storageKey, credentials.login)
    emit('login')

    return self
  }

  function logout() {
    user.authenticated = false
    window.localStorage.removeItem(storageKey)
    emit('logout')

    return self
  }

  function register(credentials) {
    if (!validateCredentials(credentials)) {
      return self
    }

    user.authenticated = true
    user.username = credentials.username
    user.email = credentials.email
    emit('register')

    return self
  }

  const self = {
    user,
    login,
    logout,
    register,
    on,
  }

  return self
}

export { createUserService, validateCredentials }
