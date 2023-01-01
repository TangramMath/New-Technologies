import * as TypeGraphQL from "type-graphql";
import { Team } from "../../../models/Team";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Team, {
    nullable: true
  })
  async teams(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Team | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).teams({});
  }
}
