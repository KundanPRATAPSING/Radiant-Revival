require('dotenv')
const { Stripe, express } = require("../config/imports");
const router = require("../config/router")
const {Orders} = require("../models/Orders")
const {Owner} = require("../models/Owner")

const stripe = Stripe(process.env.SECRET_KEY);

// Create Order

const createOrder = async(customer, data) => {
    const Items = JSON.parse(customer.metadata.cart);

    let newOrder = new Orders({
        userId: customer.metadata.userId,
        customerId: data.customer,
        paymentIntentId: data.payment_intent,

        // currently there is only one product payment.
        products: {
            id: Items[0].id,
            image: Items[0].customer_product_image_url,
            title: Items[0].customer_product_title,
            desc: Items[0].customer_product_description,
            price: Items[0].customer_product_cost,
        },
        subtotal: data.amount_subtotal / 100.0,
        total: data.amount_total/ 100.0,
        shipping: data.customer_details,
        paymentStatus: data.payment_status,
    });

    // Update the database
    // Only one user as payment is only per product
    const user = await Owner.findOne({ _id: Items[0].id });

    try{
        user.paid = true;
        await newOrder.save();
        await user.save();
    }
    catch(err){
        console.log(err)
    }

};

// This is your Stripe CLI webhook secret for testing your endpoint locally.
let endpointSecret;
// endpointSecret = process.env.SECRET_END_POINT; 

router.post(
    "/webhook",
    express.raw({ type: "application/json" }),
    (request, response) => {
        const sig = request.headers["stripe-signature"];

        let data, eventType;

        if (endpointSecret) {
            let event;

            try {
                event = stripe.webhooks.constructEvent(
                    request.body,
                    sig,
                    endpointSecret
                );
                console.log('Webhook verified')
            } catch (err) {
                console.log(`Webhook Error: ${err.message}`)
                response.status(400).send(`Webhook Error: ${err.message}`);
                return;
            }

            data = event.data.object;
            eventType = event.type;
        }
        else {
            data = request.body.data.object;
            eventType = request.body.type;
        }

        // Handle the event
        if (eventType === "checkout.session.completed") {
            stripe.customers.retrieve(data.customer)
                .then((customer) => {
                    createOrder(customer, data);
                }).catch((err) => console.log("Happy", err.message))
        }

        // Return a 200 response to acknowledge receipt of the event
        response.status(200).send().end();
    }
);

module.exports = router;