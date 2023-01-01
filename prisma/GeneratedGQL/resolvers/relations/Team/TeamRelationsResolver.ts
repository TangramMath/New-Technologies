import * as TypeGraphQL from "type-graphql";
import { Team } from "../../../models/Team";
import { User } from "../../../models/User";
import { TeamUserArgs } from "./args/TeamUserArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Team)
export class TeamRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async User(@TypeGraphQL.Root() team: Team, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TeamUserArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).team.findUnique({
      where: {
        id: team.id,
      },
    }).User(args);
  }
}
