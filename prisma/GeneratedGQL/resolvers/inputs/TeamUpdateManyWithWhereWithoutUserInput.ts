import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamScalarWhereInput } from "../inputs/TeamScalarWhereInput";
import { TeamUpdateManyMutationInput } from "../inputs/TeamUpdateManyMutationInput";

@TypeGraphQL.InputType("TeamUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class TeamUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => TeamScalarWhereInput, {
    nullable: false
  })
  where!: TeamScalarWhereInput;

  @TypeGraphQL.Field(_type => TeamUpdateManyMutationInput, {
    nullable: false
  })
  data!: TeamUpdateManyMutationInput;
}
