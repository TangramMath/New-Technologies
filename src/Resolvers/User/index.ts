import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import IUser from '../../models/User';

@Resolver()
export class UserResolver {
  private data: IUser[] = [];
  private registers = 0;

  @Query(() => [IUser])
  async user() {
    return this.data;
  }

  @Mutation(() => IUser)
  async createUser(@Arg('name') name: string) {
    const newUser = {
      id: this.registers,
      name,
    };
    this.registers++;
    this.data.push(newUser);
    return newUser;
  }
}
