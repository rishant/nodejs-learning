import { bookList, userList } from '../data/FackData.js';

const resolvers = {
    Query: {
        getAllBooks: () => bookList,
        getAllUsers: () => userList,
    },

    Mutation: {
        createBook: async (_, {title, author}) => {
            let newBook = {"title": title, "author" : author};
            bookList.push(newBook);
            console.log("Book added successfully");
            return newBook;
        },
        createUser: async (_, {name, age, married}) => {
            let newUser = {"name": name, "age" : age, "married": married };
            userList.push(newUser);
            console.log("User added successfully");
            return newUser;
        }
    }
};

export { resolvers };