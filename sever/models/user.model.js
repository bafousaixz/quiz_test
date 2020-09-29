const Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const UserModel = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        required: false
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: false
    },

    tel: {
        type: String,
        required: false
    },

    image: {
        type: String,
        required: false
    },

    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

// Hash the password before saving the user model
UserModel.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})

// Generate an auth token for the user
UserModel.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({ _id: user._id }, 'cut deeee');
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
}


// Search for a user by email and password.
UserModel.statics.findByCredentials = async(username, password) => {
    const user = await users.findOne({ username });
    if (!user) {
        throw new Error({ error: 'Invalid login credentials' });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' });
    }
    return user;
}

users = Mongoose.model("users", UserModel);

module.exports = users;