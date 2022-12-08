const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

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
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
}
  
startServer()