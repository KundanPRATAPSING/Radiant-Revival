require("dotenv").config();

const { Stripe } = require("../config/imports");
const router = require("../config/router");

const stripe = Stripe(process.env.SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    const cartItems = req.body.cartItems.map((item) => {
        return {
            id: item.id,
        };
    });

    const customer = await stripe.customers.create({
        metadata: {
            userId: req.body.userId,
            cart: JSON.stringify(cartItems),
        },
    });

    const line_items = req.body.cartItems.map((item) => {
        const unit_amount =
            parseFloat(item.customer_product_cost.replace("$", "")) * 100 * 80;

        const metadata = {
            id: JSON.stringify(item.id),
        };

        // Image from github
        const imagePath = `https://raw.githubusercontent.com/Ankit-Ransh/ImageHosting/main/${item.customer_product_image_url}`;

        return {
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.customer_product_title,
                    images: [imagePath],
                    description: item.customer_product_description,
                    metadata: metadata,
                },
                unit_amount,
            },
            quantity: item.quantity,
        };
    });

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_address_collection: {
            allowed_countries: ["US", "CA", "IN"],
        },
        shipping_options: [
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 0,
                        currency: "inr",
                    },
                    display_name: "Free shipping",
                    // Delivers between 5-7 business days
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 5,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 7,
                        },
                    },
                },
            },
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 90000,
                        currency: "inr",
                    },
                    display_name: "Next day air",
                    // Delivers in exactly 1 business day
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 1,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 1,
                        },
                    },
                },
            },
        ],
        phone_number_collection: {
            enabled: true,
        },
        customer: customer.id,
        line_items,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/fail",
    });

    res.send({ url: session.url });
});

module.exports = router;
