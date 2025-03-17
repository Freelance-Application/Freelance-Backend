/*
  Warnings:

  - Added the required column `description` to the `UserSkill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `UserSkill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserSkill" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "level" INTEGER NOT NULL;
