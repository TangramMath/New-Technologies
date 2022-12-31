import { PrismaClient } from '@prisma/client';
import { ITeam } from '../Team/prisma';

export interface IUser {
  name?: string;
  teams?: ITeam;
  email: string;
}

export async function getAll(): Promise<IUser[]> {
  return await new PrismaClient().user.findMany();
}

export class PrismaUser implements IUser {
  constructor(
    public readonly email: string,
    private readonly client: PrismaClient,
    public readonly name?: string,
  ) {}

  async Create(): Promise<IUser | null> {
    if (!this.name) {
      return null;
    }
    return await this.client.user.create({
      data: {
        name: this.name,
        email: this.email,
      },
    });
  }

  async getOnTeam(teamName: string) {
    return await this.client.user.update({
      where: {
        email: this.email,
      },
      data: {},
    });
  }

  async getOne(): Promise<IUser | null> {
    return await this.client.user.findUnique({
      where: {
        email: this.email,
      },
    });
  }
}
