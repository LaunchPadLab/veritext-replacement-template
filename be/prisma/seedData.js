import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

const users = [
  {
    id: '09f96f1c-d494-11ed-afa1-0242ac120002',
    name: 'LPL',
    email: 'admin@launchpadlab.com',
    admin: true,
  },
  {
    id: '16043648-d494-11ed-afa1-0242ac120002',
    name: 'Tiger Woods',
    email: 'tigerwoods@pga.com',
    admin: false,
  },
  {
    id: '1b37a924-d494-11ed-afa1-0242ac120002',
    name: 'Phil Mickelson',
    email: 'philmickelson@liv.com',
    admin: false,
  },
]

const folders = [
  {
    id: '297714b6-d494-11ed-afa1-0242ac120002',
    name: 'Home',
    repository: 'VAULT',
    path: '/folders/home',
  },
  {
    id: '2dcb8394-d494-11ed-afa1-0242ac120002',
    name: 'Launchpad Lab',
    repository: 'VAULT',
    path: '/folders/home/launchpad-lab',
    parentFolderId: '297714b6-d494-11ed-afa1-0242ac120002',
  },
  {
    id: '2dcb8394-d494-11ed-bfa2-0242ac120002',
    name: 'Cases',
    repository: 'VAULT',
    path: '/folders/home/launchpad-lab/cases',
    parentFolderId: '2dcb8394-d494-11ed-afa1-0242ac120002',
  },
]

const files = [
  {
    id: '701c0838-d49c-11ed-afa1-0242ac120002',
    name: 'Case 1',
    repository: 'VAULT',
    path: '/folders/home/launchpad-lab/cases/case-1',
    parentFolderId: '2dcb8394-d494-11ed-bfa2-0242ac120002',
    url: 'https://www.google.com',
  },
  {
    id: '75ab2ed2-d49c-11ed-afa1-0242ac120002',
    name: 'Case 2',
    repository: 'VAULT',
    path: '/folders/home/launchpad-lab/cases/case-2',
    parentFolderId: '2dcb8394-d494-11ed-bfa2-0242ac120002',
    url: 'https://www.google.com',
  },
  {
    id: '7947adae-d49c-11ed-afa1-0242ac120002',
    name: 'Case 3',
    repository: 'VAULT',
    path: '/folders/home/launchpad-lab/cases/case-3',
    parentFolderId: '2dcb8394-d494-11ed-bfa2-0242ac120002',
    url: 'https://www.google.com',
  },
]

export { users, folders, files }
