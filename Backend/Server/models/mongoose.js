const {mongoose,jwt} = require("../config/imports")

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    console.log("DB Connected");
}

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

const ownerSchema = new mongoose.Schema({
    customer_name: String,
    customer_username: String,
    customer_address: String,
    customer_phoneNumber: String,
    customer_email: String,
    customer_product_category: String,
    customer_product_image: String,
    customer_product_image_url: String,
    customer_product_title: String,
    customer_product_description: String,
    customer_product_cost: String,
});

const Owner = new mongoose.model("Owner", ownerSchema);

module.exports = {
  Owner: Owner,
  Users: Users
};