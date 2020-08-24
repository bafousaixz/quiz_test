const Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

const Tests = new Schema({
    Name: {
        type: String,
        unique: true,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    question_id: {
        type: String,
        required: true
    },
    answer_id: [{
        type: String,
        required: true
    }]
});

tests = Mongoose.model("tests", Tests)

module.exports = tests;