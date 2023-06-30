const router = require("../config/router");

const {Owner} = require("../models/mongoose")
const {Users} = require("../models/mongoose")

router.post("/customer_orders", async (req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    // get details of the customer
    let customer = new Owner();
    const email = req.body.customer_email;
    let flag = 0;

    try {
        const document = await Users.findOne({ email: email }); // Find the document by email

        if (document) {
            customer.customer_name = document.name;
            customer.customer_username = document.username;
            customer.customer_address = document.address;
            customer.customer_phoneNumber = document.phoneNumber;
            customer.customer_email = document.email;
            flag = 1;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }

    try {
        if (flag === 1) {
            customer.customer_product_category = req.body.customer_product_category;
            customer.customer_product_image = req.body.customer_product_image;
            customer.customer_product_image_url = req.body.customer_product_image_url;
            customer.customer_product_title = req.body.customer_product_title;
            customer.customer_product_description =
                req.body.customer_product_description;
            customer.customer_product_cost = req.body.customer_product_cost;

            try {
                await customer.save();
                res.status(200).json("Pending payment confirmation");
            } catch (error) {
                res.status(500).json({ error: "Order Failed" });
            }
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;