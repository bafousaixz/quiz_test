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
    name: {
        type: String,
        unique: true,
        required: true
    },
});

resource = Mongoose.model("Test_resource", Resoure)

module.exports = resource;