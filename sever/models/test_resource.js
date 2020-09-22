const Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

const Resoure = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    }
});

resource = Mongoose.model("resource", Resoure)

module.exports = resource;