const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

// The GraphQL schema
const typeDefs = `#graphql

  # "Query Return Type Object" 
  type Book {
    title: String
    author: String
  }

  # "Query Defination" 
  type Query {
    books: [Book]
  }
  
  # "Mutations"

`;

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  Query: {
    books: async () => await getAllBooks(),
  },
};

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

async function getAllBooks(){
  return books;
}

async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);

  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server),
  );
  
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000`);
}

startServer();