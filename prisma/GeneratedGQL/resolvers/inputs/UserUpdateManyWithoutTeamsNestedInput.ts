import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTeamsInput } from "../inputs/UserCreateOrConnectWithoutTeamsInput";
import { UserCreateWithoutTeamsInput } from "../inputs/UserCreateWithoutTeamsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutTeamsInput } from "../inputs/UserUpdateManyWithWhereWithoutTeamsInput";
import { UserUpdateWithWhereUniqueWithoutTeamsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutTeamsInput";
import { UserUpsertWithWhereUniqueWithoutTeamsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutTeamsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutTeamsNestedInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutTeamsNestedInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutTeamsInput], {
    nullable: true
  })
  create?: UserCreateWithoutTeamsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutTeamsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTeamsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutTeamsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutTeamsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutTeamsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutTeamsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutTeamsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutTeamsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
