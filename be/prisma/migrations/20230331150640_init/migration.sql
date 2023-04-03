-- CreateEnum
CREATE TYPE "ActionType" AS ENUM ('CREATE', 'VIEW', 'DELETE');

-- CreateEnum
CREATE TYPE "Repository" AS ENUM ('VAULT', 'EXHIBIT_SHARE');

-- CreateEnum
CREATE TYPE "ActionableType" AS ENUM ('FILE', 'FOLDER');

-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('CREATED', 'VIEWED', 'DOWNLOADED', 'MOVED', 'DELETED', 'RENAMED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "activityType" "ActivityType" NOT NULL,
    "actionableType" "ActionableType" NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Folder" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "repository" "Repository" NOT NULL,

    CONSTRAINT "Folder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PermissionRule" (
    "id" TEXT NOT NULL,
    "folderId" TEXT NOT NULL,
    "actionType" "ActionType" NOT NULL,

    CONSTRAINT "PermissionRule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "parentFolderId" INTEGER NOT NULL,
    "repository" "Repository" NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Activity_userId_key" ON "Activity"("userId");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissionRule" ADD CONSTRAINT "PermissionRule_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;