const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: 'string', required: true },
    age: { type: 'number', required: true },
    married: { type: 'boolean', required: true },
});

const User = mongoose.model('User', UserSchema);

module.exports = {User};