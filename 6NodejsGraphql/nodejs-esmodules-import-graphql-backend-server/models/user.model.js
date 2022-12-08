import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: 'string', required: true },
    age: { type: 'number', required: true },
    married: { type: 'boolean', required: true },
});

const User = mongoose.model('User', UserSchema);

export {User};