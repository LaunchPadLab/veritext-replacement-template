import { Router } from 'express'
import { UsersController } from '../controllers/users.controller.js'

export class UserRoute {
  path = '/users'
  router = Router()
  user = new UsersController()

  constructor() {
    this.initializeRoutes()
  }

  //   TODO: Add validation middleware

  initializeRoutes() {
    this.router.get(`${this.path}`, this.user.getUsers)
    this.router.get(`${this.path}/:id(\\d+)`, this.user.getUserById)
    this.router.post(`${this.path}`, this.user.createUser)
    this.router.put(`${this.path}/:id(\\d+)`, this.user.updateUser)
    this.router.delete(`${this.path}/:id(\\d+)`, this.user.deleteUser)
  }
}
