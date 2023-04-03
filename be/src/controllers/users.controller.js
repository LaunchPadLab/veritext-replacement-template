import { UserService } from '../services/user.service.js'

export class UsersController {
  user = new UserService()

  getUsers = async (req, res, next) => {
    try {
      const findAllUsersData = await this.user.findAllUser()

      res.status(200).json({ data: findAllUsersData, message: 'findAll' })
    } catch (error) {
      next(error)
    }
  }

  getUserById = async (req, res, next) => {
    try {
      const userId = Number(req.params.id)
      const findOneUserData = await this.user.findUserById(userId)

      res.status(200).json({ data: findOneUserData, message: 'findOne' })
    } catch (error) {
      next(error)
    }
  }

  createUser = async (req, res, next) => {
    try {
      const userData = req.body
      const createUserData = await this.user.createUser(userData)

      res.status(201).json({ data: createUserData, message: 'created' })
    } catch (error) {
      next(error)
    }
  }

  updateUser = async (req, res, next) => {
    try {
      const userId = Number(req.params.id)
      const userData = req.body
      const updateUserData = await this.user.updateUser(userId, userData)

      res.status(200).json({ data: updateUserData, message: 'updated' })
    } catch (error) {
      next(error)
    }
  }

  deleteUser = async (req, res, next) => {
    try {
      const userId = Number(req.params.id)
      const deleteUserData = await this.user.deleteUser(userId)

      res.status(200).json({ data: deleteUserData, message: 'deleted' })
    } catch (error) {
      next(error)
    }
  }
}
