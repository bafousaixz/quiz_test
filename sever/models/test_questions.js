const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;


const Question = new Schema({
    Content: {
        type: String,
        unique: true,
        required: true
    },
    Img: {
        type: String,
        required: false,
    },
    Level: {
        type: String,
        required: false,
    },
    Resource_id: {
        type: String,
        require: true,
    },
});

questions = Mongoose.model("questions", Question)

module.exports = questions;