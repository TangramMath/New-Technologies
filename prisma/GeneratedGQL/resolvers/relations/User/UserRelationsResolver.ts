import * as TypeGraphQL from "type-graphql";
import { Team } from "../../../models/Team";
import { User } from "../../../models/User";
import { UserTeamsArgs } from "./args/UserTeamsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Team], {
    nullable: false
  })
  async teams(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTeamsArgs): Promise<Team[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).teams(args);
  }
}
