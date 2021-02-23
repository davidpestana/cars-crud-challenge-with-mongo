const mongoose = require('mongoose');


const userSchema = {
    email: {
        type: String,
        required: true,
        index: unique
    },
    name: String,
    password: String
}

const User = mongoose.model('User', userSchema);

module.exports = User;