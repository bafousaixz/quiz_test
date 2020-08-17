const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;


//connect DB
var url = 'mongodb://localhost:27017/mydb';
db = Mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
})


const Question = new Schema({
    Content: {
        type: String,
        unique: true,
        required: true
    },
    Img: {
        type: String,
        required: false,
    },
    Level: {
        type: String,
        required: false,
    },
    Resource_id: {
        type: String,
        require: true,
    }

});

questions = Mongoose.model("questions", Question)

module.exports = questions;