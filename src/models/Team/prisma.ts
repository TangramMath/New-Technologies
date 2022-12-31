import { PrismaClient } from '@prisma/client';
import { IUser } from '../User/prisma';

export interface ITeam {
  name?: string;
  members: IUser[];
}

export class TeamPrisma implements ITeam {
  members: IUser[];
  constructor(
    public readonly client: PrismaClient,
    public readonly name?: string,
  ) {}

  async create(userId: string) {
    if (!this.name) {
      return;
    }
    return await this.client.team.create({
      data: {
        name: this.name,
        userId: userId,
      },
    });
  }
  async associate(userId: string, teamId: string) {
    return this.client.user.update({
      where: {
        id: userId,
      },
      data: {
        teams: {
          connect: {
            id: teamId,
          },
        },
      },
    });
  }
}
