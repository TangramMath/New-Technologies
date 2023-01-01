import * as TypeGraphQL from 'type-graphql';
import { UserCreateWithoutTeamsInput } from '../inputs/UserCreateWithoutTeamsInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserCreateOrConnectWithoutTeamsInput', {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutTeamsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTeamsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutTeamsInput;
}
