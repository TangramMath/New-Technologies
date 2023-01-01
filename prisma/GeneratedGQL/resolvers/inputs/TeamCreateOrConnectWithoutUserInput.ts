import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateWithoutUserInput } from "../inputs/TeamCreateWithoutUserInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType("TeamCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class TeamCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => TeamWhereUniqueInput, {
    nullable: false
  })
  where!: TeamWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamCreateWithoutUserInput, {
    nullable: false
  })
  create!: TeamCreateWithoutUserInput;
}
