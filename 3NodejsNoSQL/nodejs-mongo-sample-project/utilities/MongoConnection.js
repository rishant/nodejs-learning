const config = require('../config/config.json');

const mongoose = require('mongoose');

const dbURI =  process.env.APP_MONGO_URI || config.application.dbUri || 'mongodb://localhost:27017/mongooseDB';

mongoose.connect(dbURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

// Connect to mongo database
var db = mongoose.connection;
// if error
db.on('error', (error) => {
    console.error(`error: ${error}`);
});

db.once('open', function () {
    console.log('Mongodb connection is open');
});

// if connected
db.on('connected', (err, res) => {
    console.log('Connected to database')
})

// if disconnected
db.on('disconnected', function () {
    console.log('Disconnected to database');
});

module.exports = {
    db
}