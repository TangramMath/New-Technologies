import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import IUser from '../../models/User';
import { PrismaUser, getAll } from '../../models/User/prisma';
import { PrismaClient } from '@prisma/client';

@Resolver()
export class UserResolver {
  @Query(() => [IUser])
  async users() {
    return await getAll();
  }

  @Query(() => IUser)
  async OneUser(@Arg('email') email: string) {
    return await new PrismaUser(email, new PrismaClient()).getOne();
  }

  @Mutation(() => IUser)
  async createUser(@Arg('name') name: string, @Arg('email') email: string) {
    return new PrismaUser(email, new PrismaClient(), name).Create();
  }
}
