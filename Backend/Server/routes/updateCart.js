const router = require("express").Router();
const { Owner } = require("../models/Owner");

router.put('/updateCart', async (req, res) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    const { quantity, id } = req.body;

    try {
        const updatedOrder = await Owner.findByIdAndUpdate(
            id,
            { quantity },
            { new: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({ error: 'Order not found' });
        }

        res.status(200).json({ message: 'Quantity updated successfully', order: updatedOrder });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
