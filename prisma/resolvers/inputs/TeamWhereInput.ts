import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("TeamWhereInput", {
  isAbstract: true
})
export class TeamWhereInput {
  @TypeGraphQL.Field(_type => [TeamWhereInput], {
    nullable: true
  })
  AND?: TeamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamWhereInput], {
    nullable: true
  })
  OR?: TeamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamWhereInput], {
    nullable: true
  })
  NOT?: TeamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
