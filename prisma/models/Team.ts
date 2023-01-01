import * as TypeGraphQL from 'type-graphql';
import { User } from '../models/User';

@TypeGraphQL.ObjectType('Team', {
  isAbstract: true,
})
export class Team {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  User?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;
}
