const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MessagesSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Messages = mongoose.model('messages', MessagesSchema);
