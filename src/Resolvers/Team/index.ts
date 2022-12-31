import { Resolver, Query, Mutation, Arg, ID } from 'type-graphql';
import { Team } from '../../models/Team/index';
import { TeamPrisma } from '../../models/Team/prisma';
import { PrismaClient } from '@prisma/client';

@Resolver(Team)
export class TeamResolver {
  /*@Query(() => Team)
  async OneUser(@Arg('id') id: string) {
    return await new TeamPrisma(new PrismaClient())
  }*/

  @Mutation(() => Team)
  async create(@Arg('name') name: string, @Arg('userId') userId: string) {
    return new TeamPrisma(new PrismaClient(), name).create(userId);
  }
}
