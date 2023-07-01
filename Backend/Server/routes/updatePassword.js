const {bcrypt} = require("../config/imports");
const router = require("../config/router");

const saltRounds = 10;
const {Users} = require("../models/Users")

router.put("/updatePassword", async (req, res) => {
    const updateData = req.body; // Get the updated data from the request body
    const email = updateData.email; // Get the email from the request body

    try {
        const user = await Users.findOne({ email: email });

        const match = await bcrypt.compare(updateData.password, user.password);

        if (match) {
            return res.status(400).json({
                errors: { password: "New Password cannot be same as previous" },
            });
        }

        const salt = await bcrypt.genSalt(saltRounds);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        updateData.password = hashPassword;

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