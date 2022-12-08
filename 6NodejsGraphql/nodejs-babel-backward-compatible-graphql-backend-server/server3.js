// const { ApolloServer } = require('@apollo/server')
import { ApolloServer } from '@apollo/server'
const { startStandaloneServer } = require('@apollo/server/standalone');

const { typeDefs } = require('./Schema/TypeDefs')
const { resolvers } = require('./Schema/Resolvers')

const mongoose = require('mongoose');

async function createMongoDBConnection() {
  await mongoose.connect('mongodb://localhost:27017/myapp', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  console.log('Mongoose connected...')
}
createMongoDBConnection();

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
}

startServer();