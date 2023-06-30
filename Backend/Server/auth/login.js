const {bcrypt} = require("../config/imports")
const router = require("../config/router")

const {Users} = require("../models/mongoose")

router.post("/login", async (req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    const isEmail = req.body.email;
    const isPassword = req.body.password;

    const user = await Users.findOne({ email: isEmail });

    if (!user) {
        return res.json({ errors: { email: "Email does not exist" } });
    }

    const match = await bcrypt.compare(isPassword, user.password);

    if (!match) {
        return res.json({ errors: { password: "Incorrect password" } });
    }

    if (user.verified === false) {
        return res.json({ errors: { verification: "Email not verified" } });
    }

    res.json({ success: true });
});

module.exports = router