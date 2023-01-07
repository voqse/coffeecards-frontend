/* eslint-disable no-use-before-define */
function createEventHandler() {
  const listeners = {}

  function getListeners(evt) {
    return listeners[evt] || []
  }

  function emit(evt, ...args) {
    getListeners(evt).forEach((e) => e(...args))
    return self
  }

  function on(evt, ...cb) {
    listeners[evt] = getListeners(evt).concat(cb)
    return self
  }

  function off(evt, cb) {
    listeners[evt] = getListeners(evt).filter((e) => e !== cb)
    return self
  }

  const self = {
    emit,
    on,
    off,
  }

  return self
}

export default createEventHandler
