const mongoose = require('mongoose');

const {db} = require('./../utilities/MongoConnection');

const bookSchema = new mongoose.Schema({
  title: {
  type: String,
  required: true
  },
  author: {
    type: String,
    required: false,
    // default: 'Rishantg'
  },
  publisher: {
    type: String,
    required: false,
    // default: 'Tata Machill'
  },
  read: {
    type: Boolean,
    required: false,
    // default: true
  }
}, { collection: 'books' });
  
bookSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

bookSchema.set('toJSON', {
  virtuals: true,
});

const Book = db.model('Book', bookSchema);
module.exports = Book;
  