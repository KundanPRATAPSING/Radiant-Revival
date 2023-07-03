require("dotenv").config();
const {mongoose,main} = require("./mongoose");

main().catch((err) => console.log(err));

const ownerSchema = new mongoose.Schema({
    customer_id: String,
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
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    }
});

const Owner = new mongoose.model("Owner", ownerSchema);

module.exports = {
    Owner: Owner,
};