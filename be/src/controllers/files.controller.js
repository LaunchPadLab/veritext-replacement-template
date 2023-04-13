import { FileService } from '../services/file.service.js'

export class FilesController {
  get file() {
    return new FileService()
  }

  getFiles = async (req, res, next) => {
    try {
      const findAllFilesData = await this.file.findAllFile()

      res.status(200).json({ data: findAllFilesData, message: 'findAll' })
    } catch (error) {
      next(error)
    }
  }

  getFileById = async (req, res, next) => {
    try {
      const fileId = Number(req.params.id)
      const findOneFileData = await this.file.findFileById(fileId)

      res.status(200).json({ data: findOneFileData, message: 'findOne' })
    } catch (error) {
      next(error)
    }
  }

  createFile = async (req, res, next) => {
    try {
      const fileData = req.body
      const createFileData = await this.file.createFile(fileData)

      res.status(201).json({ data: createFileData, message: 'created' })
    } catch (error) {
      next(error)
    }
  }

  updateFile = async (req, res, next) => {
    try {
      const fileId = Number(req.params.id)
      const fileData = req.body
      const updateFileData = await this.file.updateFile(fileId, fileData)

      res.status(200).json({ data: updateFileData, message: 'updated' })
    } catch (error) {
      next(error)
    }
  }

  deleteFile = async (req, res, next) => {
    try {
      const fileId = Number(req.params.id)
      const deleteFileData = await this.file.deleteFile(fileId)

      res.status(200).json({ data: deleteFileData, message: 'deleted' })
    } catch (error) {
      next(error)
    }
  }
}
