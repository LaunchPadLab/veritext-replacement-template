import prisma from './seeds/prismaClient.js'
import folderSeeder from './seeds/seeders/folderSeeder.js'
import fileSeeder from './seeds/seeders/fileSeeder.js'

const load = async () => {
  try {
    await folderSeeder()
    await fileSeeder()
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}
load()
