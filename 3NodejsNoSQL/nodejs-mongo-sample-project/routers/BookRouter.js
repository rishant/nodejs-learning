const express = require('express');
const router = express.Router();

const Book = require('../models/Book');

//https://www.bezkoder.com/node-express-mongodb-crud-rest-api/

/*
Book.findOne({title: "java"}, function (err, book) {
    console.log(book);
});

Book.find({title: "java"}, function (err, books) {
    console.log(books);
});

let findCondition = {title: "java"};
let updateFields = {title: "java1"};
Book.findOneAndUpdate(
    findCondition,
    updateFields,
    {overwrite: true, new: true}, 
    //{overwrite: true, new: false}, 
    function(err, book) {
        console.log(book); // new document
});
*/
router.post('/', function (req, res) {
    const book = new Book(req.body);
    book.save().then((doc) => {
        res.json(doc);
    }).catch(err => {
        res.status(500).send({ message : err.message || "Some error occurred while creating the book."});
    });
});

router.get('/', function (req, res) {
    Book.find({})
        .sort({ title: 'desc' })
        .then((docs) => {
        res.json(docs);
        });
});

router.put('/:id', function (req, res) {
    Book.findOneAndReplace({ _id: req.params.id }, req.body, {
        returnDocument: 'after',
    }).then((doc) => {
        res.json(doc);
    }).catch((err) => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while updating book."
          });
    });
});

router.delete('/:id', function (req, res) {
    Book.findByIdAndDelete({ _id: req.params.id }).then((doc) => {
        res.json(doc);
    });
});

module.exports = router;