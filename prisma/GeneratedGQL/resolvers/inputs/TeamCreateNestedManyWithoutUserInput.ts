import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateOrConnectWithoutUserInput } from "../inputs/TeamCreateOrConnectWithoutUserInput";
import { TeamCreateWithoutUserInput } from "../inputs/TeamCreateWithoutUserInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType("TeamCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class TeamCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TeamCreateWithoutUserInput], {
    nullable: true
  })
  create?: TeamCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TeamCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamWhereUniqueInput], {
    nullable: true
  })
  connect?: TeamWhereUniqueInput[] | undefined;
}
