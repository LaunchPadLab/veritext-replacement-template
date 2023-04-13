import { FolderService } from '../services/folder.service.js'

export class FoldersController {
  get folder() {
    return new FolderService()
  }

  getFolders = async (req, res, next) => {
    try {
      const findAllFoldersData = await this.folder.findAllFolder()

      res.status(200).json({ data: findAllFoldersData, message: 'findAll' })
    } catch (error) {
      next(error)
    }
  }

  getFolderById = async (req, res, next) => {
    try {
      const folderId = Number(req.params.id)
      const findOneFolderData = await this.folder.findFolderById(folderId)

      res.status(200).json({ data: findOneFolderData, message: 'findOne' })
    } catch (error) {
      next(error)
    }
  }

  createFolder = async (req, res, next) => {
    try {
      const folderData = req.body
      const createFolderData = await this.folder.createFolder(folderData)

      res.status(201).json({ data: createFolderData, message: 'created' })
    } catch (error) {
      next(error)
    }
  }

  updateFolder = async (req, res, next) => {
    try {
      const folderId = Number(req.params.id)
      const folderData = req.body
      const updateFolderData = await this.folder.updateFolder(
        folderId,
        folderData
      )

      res.status(200).json({ data: updateFolderData, message: 'updated' })
    } catch (error) {
      next(error)
    }
  }

  deleteFolder = async (req, res, next) => {
    try {
      const folderId = Number(req.params.id)
      const deleteFolderData = await this.folder.deleteFolder(folderId)

      res.status(200).json({ data: deleteFolderData, message: 'deleted' })
    } catch (error) {
      next(error)
    }
  }
}
