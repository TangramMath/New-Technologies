import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutTeamsInput } from "../inputs/UserCreateNestedManyWithoutTeamsInput";

@TypeGraphQL.InputType("TeamCreateInput", {
  isAbstract: true
})
export class TeamCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutTeamsInput, {
    nullable: true
  })
  User?: UserCreateNestedManyWithoutTeamsInput | undefined;
}
