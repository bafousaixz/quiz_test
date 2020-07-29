const Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//connect DB
var url = 'mongodb://localhost:27017/mydb';
Mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
})


const UserModel = new Schema({
  username: { 
      type: String, 
      unique: true, 
      required: true },

  hash: { 
      type: String, 
      required: true },

  First_Name: { 
      type: String, 
      required: true },

  Last_Name: { 
      type: String, 
      required: true },

  tokens: [{
    token: {
        type: String,
        required: true
    }
}]
});



// Hash the password before saving the user model
UserModel.pre('save', async function (next) {
    const user = this
    if (user.isModified('hash')) {
        user.hash = await bcrypt.hash(user.hash, 8)
    }
    next()
})


 // Generate an auth token for the user
UserModel.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({_id: user._id}, 'cut deeee')
    user.tokens = user.tokens.concat({token})
    await user.save()
    console.log(token)
    return token
}


 // Search for a user by email and password.
UserModel.statics.findByCredentials = async (username, hash) => {
    const user = await users.findOne({ username} )
    if (!user) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    const isPasswordMatch = await bcrypt.compare(hash, user.hash)
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    return user
}
  

users = Mongoose.model("users", UserModel)

module.exports = users;