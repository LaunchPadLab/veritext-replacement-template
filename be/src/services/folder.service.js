import prisma from '../lib/prisma.js'
import { HttpException } from '../exceptions/HttpException.js'

export class FolderService {
  get folder() {
    return prisma.folder
  }

  async findAllFolder() {
    const allFolder = await this.folder.findMany()
    return allFolder
  }

  async findFolderById(folderId) {
    const findFolder = await this.folder.findUnique({ where: { id: folderId } })
    if (!findFolder) throw new HttpException(409, "User doesn't exist")

    return findFolder
  }

  async createFolder(folderData) {
    const createFolderData = await this.folder.create({
      data: { ...folderData },
    })
    return createFolderData
  }

  async updateFolder(folderId, folderData) {
    const findFolder = await this.folder.findUnique({ where: { id: folderId } })
    if (!findFolder) throw new HttpException(409, "Folder doesn't exist")

    const updateFolderData = await this.folder.update({
      where: { id: folderId },
      data: { ...folderData },
    })
    return updateFolderData
  }

  async deleteFolder(folderId) {
    const findFolder = await this.user.findUnique({ where: { id: folderId } })
    if (!findFolder) throw new HttpException(409, "Folder doesn't exist")

    const deleteFolderData = await this.folder.delete({
      where: { id: folderId },
    })
    return deleteFolderData
  }
}
