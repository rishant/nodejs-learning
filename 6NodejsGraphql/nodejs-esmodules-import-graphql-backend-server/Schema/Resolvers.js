import { bookList, userList } from '../data/FackData.js';
import { Book } from '../models/book.model.js';
import { User } from '../models/user.model.js';

const resolvers = {
    Query: {
        getAllBooksFack: () => bookList,
        getAllBooksDB: async () => {
            const books = await Book.find()
            return books
        },
        getAllUsersFacK: () => userList,
        getAllUsersDB: async () => {
            return await User.find()
        },
    },

    Mutation: {
        createBook: async (_, {title, author}) => {
            let newBook = {"title": title, "author" : author};
            bookList.push(newBook);
            Book.create(newBook);
            console.log("Book added successfully");
            return newBook;
        },
        createUser: async (_, {name, age, married}) => {
            let newUser = {"name": name, "age" : age, "married": married };
            userList.push(newUser);
            User.create(newUser);
            console.log("User added successfully");
            return newUser;
        }
    }
};

export { resolvers };