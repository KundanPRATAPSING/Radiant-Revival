require("dotenv").config();
const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");
const bodyParser = require("body-parser");

// Replace your stripe secret key
const stripe = Stripe(process.env.SECRET_KEY);

const router = express.Router();

router.use(cors());
router.use(bodyParser.json());

// CORS middleware
router.use((req, res, next) => {
  // Replace '*' with the appropriate origin(s) or configure it dynamically
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Add other allowed methods as needed
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

  // Add other allowed headers as needed
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  // Set cache-control headers to prevent caching
  res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");

  next();
});

router.post("/create-checkout-session", async (req, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");

  const line_items = req.body.cartItems.map((item) => {
    const unit_amount =
      parseFloat(item.customer_product_cost.replace("$", "")) * 100;

    const metadata = {
      id: JSON.stringify(item.id),
    };

    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.customer_product_title,
          images: ["./success.png"],
          description: item.customer_product_description,
          metadata: metadata,
        },
        unit_amount,
      },
      quantity: 1,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "KE"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "usd",
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
            amount: 1500,
            currency: "usd",
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
    line_items,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/fail",
  });

  res.send({ url: session.url });
});

module.exports = router;
