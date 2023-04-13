import prisma from '../lib/prisma.js'
import { HttpException } from '../exceptions/HttpException.js'

export class FileService {
  get file() {
    return prisma.file
  }

  async findAllFile() {
    const allFile = await this.file.findMany()
    return allFile
  }

  async findFileById(fileId) {
    const findFile = await this.file.findUnique({ where: { id: fileId } })
    if (!findFile) throw new HttpException(409, "User doesn't exist")

    return findFile
  }

  async createFile(fileData) {
    const createFileData = await this.file.create({
      data: { ...fileData },
    })
    return createFileData
  }

  async updateFile(fileId, fileData) {
    const findFile = await this.file.findUnique({ where: { id: fileId } })
    if (!findFile) throw new HttpException(409, "File doesn't exist")

    const updateFileData = await this.file.update({
      where: { id: fileId },
      data: { ...fileData },
    })
    return updateFileData
  }

  async deleteFile(fileId) {
    const findFile = await this.user.findUnique({ where: { id: fileId } })
    if (!findFile) throw new HttpException(409, "File doesn't exist")

    const deleteFileData = await this.file.delete({
      where: { id: fileId },
    })
    return deleteFileData
  }
}
