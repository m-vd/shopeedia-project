var mongoose = require('mongoose'),
	passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name	: String,
    address	: String,
    email	: String,
    phone   : String,
    cart	: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Cart"
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);