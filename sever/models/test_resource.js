const Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

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