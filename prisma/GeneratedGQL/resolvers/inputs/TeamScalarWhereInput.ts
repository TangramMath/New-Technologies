import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("TeamScalarWhereInput", {
  isAbstract: true
})
export class TeamScalarWhereInput {
  @TypeGraphQL.Field(_type => [TeamScalarWhereInput], {
    nullable: true
  })
  AND?: TeamScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamScalarWhereInput], {
    nullable: true
  })
  OR?: TeamScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamScalarWhereInput], {
    nullable: true
  })
  NOT?: TeamScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;
}
