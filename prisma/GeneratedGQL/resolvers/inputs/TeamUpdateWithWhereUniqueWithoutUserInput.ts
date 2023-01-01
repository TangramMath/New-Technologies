import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamUpdateWithoutUserInput } from "../inputs/TeamUpdateWithoutUserInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType("TeamUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class TeamUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TeamWhereUniqueInput, {
    nullable: false
  })
  where!: TeamWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamUpdateWithoutUserInput, {
    nullable: false
  })
  data!: TeamUpdateWithoutUserInput;
}
