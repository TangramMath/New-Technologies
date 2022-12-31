-- AlterTable
ALTER TABLE "user" ADD COLUMN     "userTeamsId" TEXT;

-- CreateTable
CREATE TABLE "team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userTeamsId" TEXT,

    CONSTRAINT "team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTeams" (
    "id" TEXT NOT NULL,

    CONSTRAINT "UserTeams_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_userTeamsId_fkey" FOREIGN KEY ("userTeamsId") REFERENCES "UserTeams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_userTeamsId_fkey" FOREIGN KEY ("userTeamsId") REFERENCES "UserTeams"("id") ON DELETE SET NULL ON UPDATE CASCADE;
