const Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

const TestQuestion = new Schema({
    test_id: {
        type: Schema.Types.ObjectId,
        ref: 'tests',
        require: true,
    },
    questions: {
        type: Object
    },

});

test_question = Mongoose.model("testquestions", TestQuestion);

module.exports = test_question;