const Mongoose = require('mongoose');
var Schema = Mongoose.Schema;


//connect DB
var url = 'mongodb://localhost:27017/mydb';
Mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
})

const Question = new Schema({
    content: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
        unique: false,
        required: false
    },
    resource_id: {
        type: String,
        require: true
    }
});

questions = Mongoose.model("questions", Question)

module.exports = questions;