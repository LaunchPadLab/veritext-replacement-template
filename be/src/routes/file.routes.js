import { Router } from 'express'
import { FilesController } from '../controllers/files.controller.js'

const router = Router()

export class FileRoute {
  get path() {
    return '/files'
  }
  get router() {
    return router
  }

  get file() {
    return new FilesController()
  }

  constructor() {
    this.initializeRoutes()
  }

  async initializeRoutes() {
    this.router.get(`${this.path}`, await this.file.getFiles)
    this.router.get(`${this.path}/:id(\\d+)`, this.file.getFileById)
    this.router.post(`${this.path}`, this.file.createFile)
    this.router.put(`${this.path}/:id(\\d+)`, this.file.updateFile)
    this.router.delete(`${this.path}/:id(\\d+)`, this.file.deleteFile)
  }
}
