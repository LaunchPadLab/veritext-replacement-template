import prisma from '../prismaClient.js'

/* eslint-disable no-console */

const getSubFolders = async () => {
  const subFolders = await prisma.folder.findMany({
    where: {
      parentFolderId: { not: null },
    },
    include: {
      parentFolder: true,
    },
  })
  return subFolders
}

const fileSeeder = async () => {
  const subFolders = await getSubFolders()

  console.log('seeding files')
  subFolders.forEach(async (folder) => {
    await prisma.file.createMany({
      data: [
        {
          name: 'Evidence 1',
          repository: 'VAULT',
          url: 'https://veritext-status-pages.s3.amazonaws.com/replacement-stock-files/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg',
          path: `/folders/${folder.parentFolder.name}/${
            folder.name
          }/${encodeURIComponent('Evidence 1')}`,
          folderId: folder.id,
        },
        {
          name: 'Evidence 2',
          repository: 'VAULT',
          url: 'https://veritext-status-pages.s3.amazonaws.com/replacement-stock-files/mikhail-pavstyuk-EKy2OTRPXdw-unsplash.jpg',
          path: `/folders/${folder.parentFolder.name}/${
            folder.name
          }/${encodeURIComponent('Evidence 2')}`,
          folderId: folder.id,
        },
        {
          name: 'Evidence 3',
          repository: 'VAULT',
          url: 'https://veritext-status-pages.s3.amazonaws.com/replacement-stock-files/tingey-injury-law-firm-veNb0DDegzE-unsplash.jpg',
          path: `/folders/${folder.parentFolder.name}/${
            folder.name
          }/${encodeURIComponent('Evidence 3')}`,
          folderId: folder.id,
        },
        {
          name: 'Evidence 4',
          repository: 'VAULT',
          url: 'https://veritext-status-pages.s3.amazonaws.com/replacement-stock-files/tingey-injury-law-firm-yCdPU73kGSc-unsplash.jpg',
          path: `/folders/${folder.parentFolder.name}/${
            folder.name
          }/${encodeURIComponent('Evidence 4')}`,
          folderId: folder.id,
        },
        {
          name: 'Video Evidence',
          repository: 'VAULT',
          url: 'https://veritext-status-pages.s3.amazonaws.com/replacement-stock-files/4c60f406-427c-4535-9e0a-8381669bea5d_1658790244+(1).mp4',
          path: `/folders/${folder.parentFolder.name}/${
            folder.name
          }/${encodeURIComponent('Video Evidence')}`,
          folderId: folder.id,
        },
        {
          name: 'Court Transcript',
          repository: 'VAULT',
          url: 'https://veritext-status-pages.s3.amazonaws.com/replacement-stock-files/Project+proposal+(1).pdf',
          path: `/folders/${folder.parentFolder.name}/${
            folder.name
          }/${encodeURIComponent('Court Transcript')}`,
          folderId: folder.id,
        },
        {
          name: 'Court Motion',
          repository: 'VAULT',
          url: 'https://veritext-status-pages.s3.amazonaws.com/replacement-stock-files/Project+proposal.pdf',
          path: `/folders/${folder.parentFolder.name}/${
            folder.name
          }/${encodeURIComponent('Court Motion')}`,
          folderId: folder.id,
        },
      ],
    })
  })
}

export default fileSeeder
