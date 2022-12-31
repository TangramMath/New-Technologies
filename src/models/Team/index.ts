import { Field, ID, ObjectType } from 'type-graphql';
import IUser from '../User';

@ObjectType()
export class Team {
  @Field()
  name: string;

  @Field(_type => ID)
  id: string;

  @Field(() => IUser)
  User: IUser;
}
