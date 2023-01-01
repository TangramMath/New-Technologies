import * as TypeGraphQL from "type-graphql";

export enum TeamScalarFieldEnum {
  id = "id",
  name = "name",
  userId = "userId"
}
TypeGraphQL.registerEnumType(TeamScalarFieldEnum, {
  name: "TeamScalarFieldEnum",
  description: undefined,
});
