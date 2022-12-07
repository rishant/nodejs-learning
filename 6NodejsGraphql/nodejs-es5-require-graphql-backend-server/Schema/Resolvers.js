const { bookList, userList } = require('../data/FackData');

const resolvers = {
    Query: {
        books: () => bookList,
        users: () => userList,
    },
};

module.exports = { resolvers };