import 'reflect-metadata';

import path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import {
  UserCrudResolver,
  TeamCrudResolver,
} from '../prisma/resolvers/crud/index';
import { PrismaClient } from '@prisma/client';
import { TeamRelationsResolver, UserRelationsResolver } from '../prisma';

interface Context {
  prisma: PrismaClient;
}

async function main() {
  const schema = await buildSchema({
    resolvers: [
      UserCrudResolver,
      TeamCrudResolver,
      UserRelationsResolver,
      TeamRelationsResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    validate: false,
  });

  const prisma = new PrismaClient();
  const server = new ApolloServer({
    schema,
    context: (): Context => ({ prisma }),
  });

  const { url } = await server.listen();
  console.log('Server running on ' + url);
}

main().catch(e => console.log(e));
