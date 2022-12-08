const { bookList, userList } = require('../data/FackData');
const { Book } = require('../models/book.model');
const { User } = require('../models/user.model');

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

module.exports = { resolvers };