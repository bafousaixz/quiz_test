const Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

const Tests = new Schema({
    name: {
        type: String,
        unique: false,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    easy: {
        type: Number,

    },
    medium: {
        type: Number,

    },
    high: {
        type: Number,

    },
    resource_id: {
        type: String,
        require: true,
    },

});

tests = Mongoose.model("tests", Tests)

module.exports = tests;