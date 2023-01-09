/* eslint-disable no-use-before-define */
import createEventHandler from '@/services/EventHandler'

export default function createUserService(options) {
  const { storageKey = 'auth' } = options || {}
  const { on, emit } = createEventHandler()

  const user = {
    authenticated: !!window.localStorage.getItem(storageKey),
    username: window.localStorage.getItem(storageKey),
  }

  function validateCredentials(credentials) {
    return credentials.username && credentials.password
  }

  function login(credentials) {
    if (!validateCredentials(credentials)) {
      return self
    }

    user.authenticated = true
    user.username = credentials.username
    window.localStorage.setItem(storageKey, credentials.username)
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
