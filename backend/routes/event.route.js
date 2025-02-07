const express = require('express');
const Event = require('../models/event.model.js');
const authMiddleware = require('../middleware/auth.middleware.js');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
    try {
        const event = new Event({ ...req.body, owner: req.user.userId });
        await event.save();
        res.json(event);
    } catch (err) {
        res.status(500).json({ error: "Event creation failed" });
    }
});

router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event || event.owner.toString() !== req.user.userId) {
            return res.status(403).json({ error: "Unauthorized" });
        }
        await event.deleteOne();
        res.json({ message: "Event deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delte event" });
    }
});

module.exports = router;