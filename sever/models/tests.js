const Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

const Tests = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    result: {
        type: Array
    }

});

tests = Mongoose.model("tests", Tests)

module.exports = tests;