import * as TypeGraphQL from 'type-graphql';
import { Team } from '../models/Team';

@TypeGraphQL.ObjectType('User', {
  isAbstract: true,
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  email!: string;

  teams?: Team | null;
}
