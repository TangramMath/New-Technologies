import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCountOrderByAggregateInput } from "../inputs/TeamCountOrderByAggregateInput";
import { TeamMaxOrderByAggregateInput } from "../inputs/TeamMaxOrderByAggregateInput";
import { TeamMinOrderByAggregateInput } from "../inputs/TeamMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TeamOrderByWithAggregationInput", {
  isAbstract: true
})
export class TeamOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TeamCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TeamCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TeamMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TeamMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TeamMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TeamMinOrderByAggregateInput | undefined;
}
