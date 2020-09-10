const Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

const TestResult = new Schema({
    test_id: {
        type: Schema.Types.ObjectId,
        ref: 'tests',
        require: true,
    },
    user_id: {
        type: String
    },
    choose: {
        type: Object
    },
    answer_right: {
        type: Number
    },
    name: {
        type: String,
        required: false
    },
    score: {
        type: Number
    }

});



test_result = Mongoose.model("testResult", TestResult)

module.exports = test_result;