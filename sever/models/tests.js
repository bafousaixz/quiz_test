const Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

const Tests = new Schema({
    name: {
        type: String,
        unique: false,
        required: true
    },
    time: {
        type: Number,
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
    password: {
        type: String,
        required: false
    },
    resource_id: {
        type: String,
        require: true,
    },

});

Tests.pre('save', async function(next) {
    const test = this
    if (test.isModified('hash')) {
        test.password = await bcrypt.hash(test.password, 8)
    }
    next()
})

tests = Mongoose.model("tests", Tests)

module.exports = tests;