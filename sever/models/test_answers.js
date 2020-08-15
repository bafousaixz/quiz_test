const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;


//connect DB
var url = 'mongodb://localhost:27017/mydb';
db = Mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
})


const Answer = new Schema({
    Content: {
        type: String,
        required: true
    },
    Right: {
        type: Boolean,
        required: true,
    },
    Question_id: {
        type: String,
        require: true
    }
});

answers = Mongoose.model("answers", Answer)

module.exports = answers;