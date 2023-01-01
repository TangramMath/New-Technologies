import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateOrConnectWithoutUserInput } from "../inputs/TeamCreateOrConnectWithoutUserInput";
import { TeamCreateWithoutUserInput } from "../inputs/TeamCreateWithoutUserInput";
import { TeamUpdateWithoutUserInput } from "../inputs/TeamUpdateWithoutUserInput";
import { TeamUpsertWithoutUserInput } from "../inputs/TeamUpsertWithoutUserInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType("TeamUpdateOneWithoutUserNestedInput", {
  isAbstract: true
})
export class TeamUpdateOneWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => TeamCreateWithoutUserInput, {
    nullable: true
  })
  create?: TeamCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TeamCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: TeamCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TeamUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: TeamUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TeamWhereUniqueInput, {
    nullable: true
  })
  connect?: TeamWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TeamUpdateWithoutUserInput, {
    nullable: true
  })
  update?: TeamUpdateWithoutUserInput | undefined;
}
