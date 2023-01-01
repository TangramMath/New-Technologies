import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTeamsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutTeamsNestedInput";

@TypeGraphQL.InputType("TeamUpdateInput", {
  isAbstract: true
})
export class TeamUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTeamsNestedInput, {
    nullable: true
  })
  User?: UserUpdateOneRequiredWithoutTeamsNestedInput | undefined;
}
