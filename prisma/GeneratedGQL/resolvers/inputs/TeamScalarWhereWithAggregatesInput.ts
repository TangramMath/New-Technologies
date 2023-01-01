import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TeamScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TeamScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TeamScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TeamScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TeamScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TeamScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;
}
