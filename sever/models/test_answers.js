const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const Answer = new Schema({
    content: {
        type: String,
        required: true
    },
    right: {
        type: Boolean,
        required: true,
    },
    resource_id: {
        type: String,
        require: true
    },
    question_id: {
        type: Schema.Types.ObjectId,
        ref: 'questions',
        require: true
    }
});

answers = Mongoose.model("answers", Answer);

module.exports = answers;