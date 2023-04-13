import { Router } from 'express'
import { FoldersController } from '../controllers/folders.controller.js'

const router = Router()

export class FolderRoute {
  get path() {
    return '/folders'
  }
  get router() {
    return router
  }

  get folder() {
    return new FoldersController()
  }

  constructor() {
    this.initializeRoutes()
  }

  async initializeRoutes() {
    this.router.get(`${this.path}`, await this.folder.getFolders)
    this.router.get(`${this.path}/:id(\\d+)`, this.folder.getFolderById)
    this.router.post(`${this.path}`, this.folder.createFolder)
    this.router.put(`${this.path}/:id(\\d+)`, this.folder.updateFolder)
    this.router.delete(`${this.path}/:id(\\d+)`, this.folder.deleteFolder)
  }
}
