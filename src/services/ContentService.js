/* eslint-disable no-use-before-define, import/prefer-default-export */
import createEventHandler from './EventHandler'

function createContentService(options) {
  const { on, emit } = createEventHandler()

  const self = {
    on,
  }

  return self
}

export { createContentService }
