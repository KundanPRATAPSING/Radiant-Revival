const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

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
    password: String,
    confirmPassword: String,
});

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

const server = express();

server.use(cors());
server.use(bodyParser.json());

// CORS middleware
server.use((req, res, next) => {
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

server.post("/register", async (req, res) => {
    let user = new Users();

    user.name = req.body.name;
    user.username = req.body.username;
    user.address = req.body.address;
    user.phoneNumber = req.body.phoneNumber;
    user.email = req.body.email;
    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;

    try {
        await user.save();
        res.json(req.body);
    } catch (error) {
        res.status(500).json({ error: "Could not register user" });
    }
});

server.post("/checkUser", async (req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    const validUserEmail = req.body.email;
    const validUserUsername = req.body.username;
    const validUserPhoneNumber = req.body.phoneNumber;

    const existingEmailUser = await Users.findOne({ email: validUserEmail });
    const existingUsernameUser = await Users.findOne({
        username: validUserUsername,
    });
    const existingPhoneNumberUser = await Users.findOne({
        phoneNumber: validUserPhoneNumber,
    });

    const errors = {};

    if (existingEmailUser) {
        errors.email = "Email already taken";
    }

    if (existingUsernameUser) {
        errors.username = "Username already taken";
    }

    if (existingPhoneNumberUser) {
        errors.phoneNumber = "Phone number already taken";
    }

    try {
        if (Object.keys(errors).length > 0) {
            res.json({ errors });
        } else {
            res.json({ success: true });
        }
    } catch (error) {
        console.error("Error validating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

server.post("/login", async (req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    const isEmail = req.body.email;
    const isPassword = req.body.password;

    const user = await Users.findOne({ email: isEmail });

    if (!user) {
        return res.json({ errors: { email: "Email does not exist" } });
    }

    if (user.password !== isPassword) {
        return res.json({ errors: { password: "Incorrect password" } });
    }

    res.json({ success: true });
});

server.post("/forgotPassword", async (req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    const isEmail = req.body.email;

    console.log(isEmail);

    const user = await Users.findOne({ email: isEmail });

    if (!user) {
        return res.json({ errors: { email: "Email does not exist" } });
    }

    res.json({ success: true });
});

server.put("/updatePassword", async (req, res) => {
    const updateData = req.body; // Get the updated data from the request body
    const email = updateData.email; // Get the email from the request body

    try {
        const user = await Users.findOne({ email: email });

        if (updateData.password === user.confirmPassword) {
            return res.status(404).json({
                errors: { password: "New Password cannot be same as previous" },
            });
        }

        const updatedUser = await Users.findOneAndUpdate(
            { email: email },
            updateData,
            {
                new: true,
            }
        );

        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

server.post("/profile", async (req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    const email = req.body.email; // Use req.body.email instead of req.body.sessionEmail

    try {
        const document = await Users.findOne({ email: email }); // Find the document by email

        if (document) {
            // Document found, return all information
            res.json(document);
        } else {
            // No document found for the given email
            res.status(404).json({ error: "Document not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

server.put("/updateProfile", async (req, res) => {
    const updateData = req.body; // Get the updated data from the request body
    const email = updateData.email; // Get the email from the request body

    try {
        const updatedUser = await Users.findOneAndUpdate(
            { email: email },
            updateData,
            {
                new: true,
            }
        );

        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

server.post("/customer_orders", async (req, res) => {
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
            customer.customer_product_description = req.body.customer_product_description;
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

server.post("/myOrders", async (req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    const email = req.body.email;

    try {
        const documents = await Owner.find({ customer_email: email });

        if (documents.length > 0) {
            // Map through the documents to extract specific information
            const specificInfo = documents.map((document) => ({
                // Modify the properties based on your specific needs
                id: document._id,
                customer_product_category: document.customer_product_category,
                customer_product_title: document.customer_product_title,
                customer_product_description: document.customer_product_description,
                customer_product_cost: document.customer_product_cost,
                customer_product_image: document.customer_product_image,
                customer_product_image_url: document.customer_product_image_url,
            }));

            res.json(specificInfo);
        } else {
            res.json([]); // Return an empty array if no documents found
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});


server.listen(8080, () => {
    console.log("Server Connected");
});
