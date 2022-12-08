const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone');

const { resolvers } = require('./Schema/Resolvers')

const fs = require('fs');
const path = require('path');

const mongoose = require('mongoose');

async function createMongoDBConnection() {
  await mongoose.connect('mongodb://localhost:27017/myapp', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  console.log('Mongoose connected...')
}
createMongoDBConnection();

console.log('directory-name 👉️', __dirname);
async function startServer() {
  const server = new ApolloServer({
    typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
}

startServer();