import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateOrConnectWithoutUserInput } from "../inputs/TeamCreateOrConnectWithoutUserInput";
import { TeamCreateWithoutUserInput } from "../inputs/TeamCreateWithoutUserInput";
import { TeamScalarWhereInput } from "../inputs/TeamScalarWhereInput";
import { TeamUpdateManyWithWhereWithoutUserInput } from "../inputs/TeamUpdateManyWithWhereWithoutUserInput";
import { TeamUpdateWithWhereUniqueWithoutUserInput } from "../inputs/TeamUpdateWithWhereUniqueWithoutUserInput";
import { TeamUpsertWithWhereUniqueWithoutUserInput } from "../inputs/TeamUpsertWithWhereUniqueWithoutUserInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType("TeamUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class TeamUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [TeamCreateWithoutUserInput], {
    nullable: true
  })
  create?: TeamCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TeamCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: TeamUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamWhereUniqueInput], {
    nullable: true
  })
  set?: TeamWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TeamWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamWhereUniqueInput], {
    nullable: true
  })
  delete?: TeamWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamWhereUniqueInput], {
    nullable: true
  })
  connect?: TeamWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: TeamUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: TeamUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TeamScalarWhereInput[] | undefined;
}
