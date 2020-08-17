const Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
// var jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

//connect DB
var url = 'mongodb://localhost:27017/mydb';
Mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
})

const Resoure = new Schema({
    Name: {
        type: String,
        unique: true,
        required: true
    },
    Image: {
        type: String,
        required: false
    },
    Content: {
        type: String,
        required: false
    }
});

resource = Mongoose.model("resource", Resoure)

module.exports = resource;