const router = require("../config/router");

const {Users} = require("../models/mongoose")

router.post("/forgotPassword", async (req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    const isEmail = req.body.email;

    const user = await Users.findOne({ email: isEmail });

    if (!user) {
        return res.json({ errors: { email: "Email does not exist" } });
    }

    res.json({ success: true });
});

module.exports = router 