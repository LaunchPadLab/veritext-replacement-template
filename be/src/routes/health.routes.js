// TODO: add swagger docs. get health and E2E test working first.

import { Router } from 'express'

// memoize router so that when the consumers retrieve it through getter,
// it's not a fresh instance, as that essentially wipes out the routes
const router = Router()

export class HealthRoute {
  get path() {
    return '/health'
  }

  get router() {
    return router
  }

  constructor() {
    this.initializeRoutes()
  }

  buildResponse(req, res) {
    res.status(200).json({ data: { attributes: { healthy: true } } })
  }

  initializeRoutes() {
    this.router.get(this.path, this.buildResponse)
  }
}
