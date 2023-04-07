import prisma from '../prismaClient.js'
import {
  parrentFolders,
  homeSubFolders,
  privateSubFolders,
  caseSubFolders,
} from '../data/folders.js'

const folderSeeder = async () => {
  console.log('seeding parrent folders')
  await prisma.folder.createMany({
    data: parrentFolders,
  })

  await createHomeSubFolders()
  await createSubFolders()
  await createCaseSubFolders()
}

const createHomeSubFolders = async () => {
  const homeFolder = await prisma.folder.findFirst({
    where: { name: 'Home' },
  })

  console.log('seeding home sub folders')
  homeSubFolders.forEach(async (folder) => {
    await prisma.folder.create({
      data: {
        name: folder.name,
        repository: folder.repository,
        path: folder.path,
        parentFolder: {
          connect: {
            id: homeFolder.id,
          },
        },
      },
    })
  })
}

const createSubFolders = async () => {
  const privateFolder = await prisma.folder.findFirst({
    where: { name: 'Private' },
  })
  console.log('seeding private sub folders')
  privateSubFolders.forEach(async (folder) => {
    await prisma.folder.create({
      data: {
        name: folder.name,
        repository: folder.repository,
        path: folder.path,
        parentFolder: {
          connect: {
            id: privateFolder.id,
          },
        },
      },
    })
  })
}

const createCaseSubFolders = async () => {
  const casesFolder = await prisma.folder.findFirst({
    where: { name: 'Cases' },
  })
  console.log('seeding cases sub folders')
  caseSubFolders.forEach(async (folder) => {
    await prisma.folder.create({
      data: {
        name: folder.name,
        repository: folder.repository,
        path: folder.path,
        parentFolder: {
          connect: {
            id: casesFolder.id,
          },
        },
      },
    })
  })
}

export default folderSeeder
