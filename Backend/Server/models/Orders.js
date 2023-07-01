require("dotenv").config();
const {mongoose,main} = require("./mongoose");

main().catch((err) => console.log(err));

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
    Orders: Orders,
};