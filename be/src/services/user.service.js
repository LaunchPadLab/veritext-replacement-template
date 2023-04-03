import prisma from '../lib/prisma.js'
import { hash } from 'bcrypt'
import { HttpException } from '../exceptions/HttpException.js'

export class UserService {
  user = prisma.user

  async findAllUser() {
    const allUser = await this.user.findMany()
    return allUser
  }

  async findUserById(userId) {
    const findUser = await this.user.findUnique({ where: { id: userId } })
    if (!findUser) throw new HttpException(409, "User doesn't exist")

    return findUser
  }

  async createUser(userData) {
    const findUser = await this.user.findUnique({
      where: { email: userData.email },
    })
    if (findUser)
      throw new HttpException(
        409,
        `This email ${userData.email} already exists`
      )

    const hashedPassword = await hash(userData.password, 10)
    const createUserData = await this.user.create({
      data: { ...userData, password: hashedPassword },
    })
    return createUserData
  }

  async updateUser(userId, userData) {
    const findUser = await this.user.findUnique({ where: { id: userId } })
    if (!findUser) throw new HttpException(409, "User doesn't exist")

    const hashedPassword = await hash(userData.password, 10)
    const updateUserData = await this.user.update({
      where: { id: userId },
      data: { ...userData, password: hashedPassword },
    })
    return updateUserData
  }

  async deleteUser(userId) {
    const findUser = await this.user.findUnique({ where: { id: userId } })
    if (!findUser) throw new HttpException(409, "User doesn't exist")

    const deleteUserData = await this.user.delete({ where: { id: userId } })
    return deleteUserData
  }
}
