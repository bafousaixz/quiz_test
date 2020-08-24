const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const Answer = new Schema({
    Content: {
        type: String,
        required: true
    },
    Right: {
        type: Boolean,
        required: true,
    },
    question_id: {
        type: Schema.Types.ObjectId,
        ref: 'questions',
        require: true
    }
});

answers = Mongoose.model("answers", Answer)

module.exports = answers;