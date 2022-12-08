import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    title: { type: 'string', required: true },
    author: { type: 'string', required: true }
})

const Book = mongoose.model('book', BookSchema);

export {Book};