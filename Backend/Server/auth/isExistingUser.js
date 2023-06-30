const router = require("../config/router")

const {Users} = require("../models/mongoose")

router.post("/checkUser", async (req, res) => {
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

module.exports = router;