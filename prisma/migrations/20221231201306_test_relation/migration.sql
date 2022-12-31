/*
  Warnings:

  - You are about to drop the column `userTeamsId` on the `team` table. All the data in the column will be lost.
  - You are about to drop the column `userTeamsId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `UserTeams` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "team" DROP CONSTRAINT "team_userTeamsId_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_userTeamsId_fkey";

-- AlterTable
ALTER TABLE "team" DROP COLUMN "userTeamsId";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "userTeamsId";

-- DropTable
DROP TABLE "UserTeams";

-- CreateTable
CREATE TABLE "_TeamToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TeamToUser_AB_unique" ON "_TeamToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TeamToUser_B_index" ON "_TeamToUser"("B");

-- AddForeignKey
ALTER TABLE "_TeamToUser" ADD CONSTRAINT "_TeamToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeamToUser" ADD CONSTRAINT "_TeamToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
