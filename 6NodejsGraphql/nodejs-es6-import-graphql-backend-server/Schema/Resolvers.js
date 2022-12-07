import { bookList, userList } from '../data/FackData.js';

const resolvers = {
    Query: {
        books: () => bookList,
        users: () => userList,
    },
};

export { resolvers };