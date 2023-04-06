import { PrismaClient } from '@prisma/client'
import { users, folders, files } from './seedData.js'
const prisma = new PrismaClient()

const load = async () => {
  try {
    await prisma.user.deleteMany()
    console.log('Users deleted')

    await prisma.file.deleteMany()
    console.log('Files deleted')

    await prisma.folder.deleteMany()
    console.log('Folders deleted')

    await prisma.user.createMany({
      data: users,
    })
    console.log('Users created')

    await prisma.folder.createMany({
      data: folders,
    })
    console.log('Folders created')

    await prisma.file.createMany({
      data: files,
    })
    console.log('Files created')
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}
load()
