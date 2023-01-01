import 'reflect-metadata';

import path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { resolvers } from '../prisma/GeneratedGQL';

interface Context {
  prisma: PrismaClient;
}

async function main() {
  const schema = await buildSchema({
    resolvers,
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
