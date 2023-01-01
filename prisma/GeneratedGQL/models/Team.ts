import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { TeamCount } from "../resolvers/outputs/TeamCount";

@TypeGraphQL.ObjectType("Team", {
  isAbstract: true
})
export class Team {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  User?: User[];

  @TypeGraphQL.Field(_type => TeamCount, {
    nullable: true
  })
  _count?: TeamCount | null;
}
