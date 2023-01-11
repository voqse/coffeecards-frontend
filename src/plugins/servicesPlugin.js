import { inject } from 'vue'

const servicesKey = Symbol(process.env.NODE_ENV !== 'production' ? 'services' : '')

function createServices(options) {
  const { services } = options || {}

  return {
    ...services,
    install(app) {
      const self = this

      app.config.globalProperties.$services = self
      app.provide(servicesKey, self)
    },
  }
}

function useServices() {
  return inject(servicesKey)
}

export { createServices, useServices }
