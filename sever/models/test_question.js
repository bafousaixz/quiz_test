const Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

const TestQuestion = new Schema({
    // name: {
    //     type: String,
    //     unique: false,
    //     required: true
    // },
    test_id: {
        type: Schema.Types.ObjectId,
        ref: 'tests',
        require: true,
    },
    questions: {
        type: Array
    }

});



test_question = Mongoose.model("testquestions", TestQuestion)

module.exports = test_question;