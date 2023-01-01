import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTeamsInput } from "../inputs/UserCreateOrConnectWithoutTeamsInput";
import { UserCreateWithoutTeamsInput } from "../inputs/UserCreateWithoutTeamsInput";
import { UserUpdateWithoutTeamsInput } from "../inputs/UserUpdateWithoutTeamsInput";
import { UserUpsertWithoutTeamsInput } from "../inputs/UserUpsertWithoutTeamsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTeamsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutTeamsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTeamsInput, {
    nullable: true
  })
  create?: UserCreateWithoutTeamsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTeamsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTeamsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTeamsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTeamsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTeamsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTeamsInput | undefined;
}
