import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateWithoutUserInput } from "../inputs/TeamCreateWithoutUserInput";
import { TeamUpdateWithoutUserInput } from "../inputs/TeamUpdateWithoutUserInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType("TeamUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class TeamUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TeamWhereUniqueInput, {
    nullable: false
  })
  where!: TeamWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamUpdateWithoutUserInput, {
    nullable: false
  })
  update!: TeamUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => TeamCreateWithoutUserInput, {
    nullable: false
  })
  create!: TeamCreateWithoutUserInput;
}
