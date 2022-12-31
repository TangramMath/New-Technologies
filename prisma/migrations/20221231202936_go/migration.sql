/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userId` on table `team` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "team" DROP CONSTRAINT "team_userId_fkey";

-- AlterTable
ALTER TABLE "team" ALTER COLUMN "userId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "team_userId_key" ON "team"("userId");

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
