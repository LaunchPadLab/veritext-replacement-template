/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         email:
 *           type: string
 *           description: users email
 *         admin:
 *           type: boolean
 *           description: if the user is an admin
 *         activities:
 *            type: array
 *            description: The activities the user has completed
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the user was added
 *       example:
 *         id: d5fE_asz
 *         email: veritext@gmail.com
 *         admin: true
 *         activities: [1, 2, 3]
 *         createdAt: 2020-03-10T04:05:06.157Z
 */
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users management and retrieval
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Users Retrieved.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 */

import { Router } from 'express'
import { UsersController } from '../controllers/users.controller.js'

// memoize router so that when the consumes retrieve it through getter,
// it's not a fresh instance, as that essentially wipes out the routes
const router = Router()

export class UserRoute {
  get path() {
    return '/users'
  }
  get router() {
    return router
  }
  get user() {
    return new UsersController()
  }

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
