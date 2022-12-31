import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export default class IUser {
  @Field(_type => ID)
  id: number;

  @Field()
  name: string;
}
