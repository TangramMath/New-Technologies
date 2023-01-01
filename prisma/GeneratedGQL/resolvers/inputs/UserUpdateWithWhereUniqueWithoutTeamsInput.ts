import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutTeamsInput } from "../inputs/UserUpdateWithoutTeamsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutTeamsInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutTeamsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTeamsInput, {
    nullable: false
  })
  data!: UserUpdateWithoutTeamsInput;
}
