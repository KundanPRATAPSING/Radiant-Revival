const router = require("../config/router")

const {Owner} = require("../models/mongoose")

router.delete("/cancelOrder", async (req, res) => {
    const id = req.body.id;

    try {
        const deleteRecord = await Owner.findOneAndDelete({ _id: id });

        if (deleteRecord) {
            res.json("OK");
        } else {
            res.status(404).json({ error: "Record not deleted" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;