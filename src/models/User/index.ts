import { Field, ID, ObjectType } from 'type-graphql';
import { Team } from '../Team';

@ObjectType()
export default class IUser {
  @Field(_type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Team)
  teams: Team;
}
