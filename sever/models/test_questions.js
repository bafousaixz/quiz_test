const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const Question = new Schema({
    content: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
        required: false,
    },
    level: {
        type: String,
        required: false,
    },
    resource_id: {
        type: String,
        require: true,
    },
});

questions = Mongoose.model("questions", Question);

module.exports = questions;