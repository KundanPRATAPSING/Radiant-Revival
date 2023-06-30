const router = require("../config/router")

const {Users} = require("../models/mongoose")

router.put("/updateProfile", async (req, res) => {
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

module.exports = router;