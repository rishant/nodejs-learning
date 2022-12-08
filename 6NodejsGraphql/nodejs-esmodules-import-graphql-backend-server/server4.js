import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import {resolvers } from './Schema/Resolvers.js';

import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import mongoose from 'mongoose';

await mongoose.connect('mongodb://localhost:27017/myapp', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
console.log('Mongoose connected...')

console.log('directory-name 👉️', __dirname);
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);