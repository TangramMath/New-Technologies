import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamWhereUniqueInput } from "../../../inputs/TeamWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTeamOrThrowArgs {
  @TypeGraphQL.Field(_type => TeamWhereUniqueInput, {
    nullable: false
  })
  where!: TeamWhereUniqueInput;
}
