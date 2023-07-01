const {jwt} = require("../config/imports")
const router = require("../config/router")

const {Users} = require("../models/Users")

router.get("/verify/:id", async (req, res) => {
    const { id } = req.params; // Fix: Changed `token` to `id`

    // Check we have an id
    if (!id) {
        return res.status(422).send({
            message: "Missing ID",
        });
    }

    // Step 1 - Verify the token from the URL
    let payload = null;
    try {
        payload = jwt.verify(
            id, // Fix: Changed `token` to `id`
            process.env.TOKEN
        );
    } catch (err) {
        return res.status(500).send(err);
    }

    try {
        // Step 2 - Find user with matching ID
        const user = await Users.findOne({ _id: payload.ID });
        if (!user) {
            return res.status(404).send({
                message: "User does not exist",
            });
        }

        // Step 3 - Update user verification status to true
        user.verified = true;
        await user.save();

        res.render("../../Server/views/successEmailVerification.ejs");

    } catch (err) {
        return res.status(500).send(err);
    }
});

module.exports = router 