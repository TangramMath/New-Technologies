import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTeamsInput } from "../inputs/UserCreateWithoutTeamsInput";
import { UserUpdateWithoutTeamsInput } from "../inputs/UserUpdateWithoutTeamsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutTeamsInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutTeamsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTeamsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTeamsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTeamsInput, {
    nullable: false
  })
  create!: UserCreateWithoutTeamsInput;
}
