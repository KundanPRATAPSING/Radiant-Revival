require("dotenv").config();
const {jwt} = require("../config/imports")
const {mongoose,main} = require("./mongoose");

main().catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    address: String,
    phoneNumber: String, // first two digits are the country code for India
    email: String,
    verified: {
        type: Boolean,
        required: true,
        default: false,
    },
    password: String,
});

userSchema.methods.generateVerificationToken = function () {
    const user = this;
    const verificationToken = jwt.sign({ ID: user._id }, process.env.TOKEN, {
        expiresIn: "7d",
    });
    return verificationToken;
};

const Users = new mongoose.model("Users", userSchema);

module.exports = {
    Users: Users,
};