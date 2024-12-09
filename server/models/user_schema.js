const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    }

});

userSchema.pre('save', async function (next) {
    
    const user = this;

    if (!user.isModified("password")) {
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    }
    catch (error) {
        next(error);
    }

});

userSchema.methods.generateToken =async function () {
     return jwt.sign(
         {
            userId : this._id.toString(),
          email: this.email,
          isAdmin: this.isAdmin,
 },
 process.env.secret_key,
{
 expiresIn:"30d",
}
)
};

const User = new mongoose.model("User", userSchema);

module.exports = User;