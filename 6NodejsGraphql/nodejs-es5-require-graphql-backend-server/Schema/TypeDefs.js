const typeDefs = `#graphql
  # type
  type Book {
    title: String
    author: String
  }

  type User {
    name: String!
    age: Int!
    married: Boolean!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    users: [User]
  }

  # Mutations

`;

module.exports = { typeDefs };