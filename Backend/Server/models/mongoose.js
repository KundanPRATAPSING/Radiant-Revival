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
    paid: {
        type: Boolean,
        required: true,
        default: false,
    }
});

const Owner = new mongoose.model("Owner", ownerSchema);

const orderSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    customerId: String,
    paymentIntentId: String,
    products: [
        {
            id: String,
            image: String,
            title: String,
            desc: String,
            price: String,
            cartQuantity: {type: Number, default: 1},
        }
    ],
    subtotal: {type: Number, required: true},
    total: {type: Number, required: true},
    shipping: {type: Object, required: true},
    deliveryStatus: {type: String, default: "pending"},
    paymentStatus: {type: String, required: true}
},
{timestamps: true})

const Orders = new mongoose.model("Order", orderSchema)

module.exports = {
  Owner: Owner,
  Users: Users,
  Orders: Orders,
};