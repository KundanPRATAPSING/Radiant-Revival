const router = require("../config/router")

const {Owner} = require("../models/mongoose")

router.post("/myOrders", async (req, res) => {
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

module.exports = router;