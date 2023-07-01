const router = require("../config/router");

const {Users} = require("../models/Users")

router.post("/profile", async (req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    const email = req.body.email; // Use req.body.email instead of req.body.sessionEmail

    try {
        const document = await Users.findOne({ email: email }); // Find the document by email

        if (document) {
            // Document found, return all information
            const docs = {
                name: document.name,
                email: document.email,
                username: document.username,
                address: document.address,
                phoneNumber: document.phoneNumber,
            };
            res.json(docs);
        } else {
            // No document found for the given email
            res.status(404).json({ error: "Document not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;