import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamWhereInput } from "../inputs/TeamWhereInput";

@TypeGraphQL.InputType("TeamListRelationFilter", {
  isAbstract: true
})
export class TeamListRelationFilter {
  @TypeGraphQL.Field(_type => TeamWhereInput, {
    nullable: true
  })
  every?: TeamWhereInput | undefined;

  @TypeGraphQL.Field(_type => TeamWhereInput, {
    nullable: true
  })
  some?: TeamWhereInput | undefined;

  @TypeGraphQL.Field(_type => TeamWhereInput, {
    nullable: true
  })
  none?: TeamWhereInput | undefined;
}
