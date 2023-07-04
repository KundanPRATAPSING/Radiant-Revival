require("dotenv").config();
const {
  Stripe,
  express,
  path,
  fs,
  ejs,
  nodemailer,
} = require("../config/imports");
const router = require("../config/router");
const { Orders } = require("../models/Orders");
const { Owner } = require("../models/Owner");

const stripe = Stripe(process.env.SECRET_KEY);

let orderSummary = {}

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_APP_PASSWORD,
  },
});

// Create Order
const createOrder = async (customer, data) => {
  const items = JSON.parse(customer.metadata.cart);

  const itemIds = items.map((item) => item.id);

  const orders = [];

  for (const itemId of itemIds) {
    const user = await Owner.findOne({ _id: itemId });

    if (user) {
      let order = {
        id: user._id.toString(),
        image: user.customer_product_image_url,
        title: user.customer_product_title,
        desc: user.customer_product_description,
        price: user.customer_product_cost,
        cartQuantity: user.quantity,
      };

      orders.push(order);
    }
  }

  try {
    // Update the items in the Owner collection
    await Owner.updateMany({ _id: { $in: itemIds } }, { paid: true });

    // console.log(data);

    // Create a new order
    let newOrder = new Orders({
      userId: customer.metadata.userId,
      customerId: data.customer,
      paymentIntentId: data.payment_intent,
      products: orders,
      subtotal: data.amount_subtotal / 100.0,
      total: data.amount_total / 100.0,
      shipping: data.customer_details,
      paymentStatus: data.payment_status,
    });

    // find all the details send it to the ejs file
    orderSummary.name = data.customer_details.name
    orderSummary.email = data.customer_details.email
    orderSummary.phone = data.customer_details.phone
    orderSummary.line1 = data.customer_details.address.line1
    orderSummary.line2 = data.customer_details.address.line2
    orderSummary.city = data.customer_details.address.city
    orderSummary.postal_code = data.customer_details.address.postal_code
    orderSummary.state = data.customer_details.address.state
    orderSummary.cost = data.amount_total
    orderSummary.shippingCharges = data.amount_total - data.amount_subtotal

    fs.readFile(
      path.join(__dirname, "../views/reciept.ejs"),
      "utf8",
      (err, template) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Internal Server Error");
        }

        const renderedHTML = ejs.render(template, { orderSummary, orders });

        transporter.sendMail({
          to: orderSummary.email,
          subject: "Order summary",
          html: renderedHTML,
        });
      }
    );

    await newOrder.save();
  } catch (err) {
    console.log(err);
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
        console.log("Webhook verified");
      } catch (err) {
        console.log(`Webhook Error: ${err.message}`);
        response.status(400).send(`Webhook Error: ${err.message}`);
        return;
      }

      data = event.data.object;
      eventType = event.type;
    } else {
      data = request.body.data.object;
      eventType = request.body.type;
    }

    // Handle the event
    if (eventType === "checkout.session.completed") {
      stripe.customers
        .retrieve(data.customer)
        .then((customer) => {
          createOrder(customer, data);
        })
        .catch((err) => console.log("Happy", err.message));
    }

    // Return a 200 response to acknowledge receipt of the event
    response.status(200).send().end();
  }
);

module.exports = router;


