import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import {typeDefs } from './Schema/TypeDefs.js';
import {resolvers } from './Schema/Resolvers.js';

import mongoose from 'mongoose';

await mongoose.connect('mongodb://localhost:27017/myapp', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
console.log('Mongoose connected...')

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);