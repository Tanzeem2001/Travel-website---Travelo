const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');

// Get tour by ID
router.get('/tour/:id', async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        if (!tour) {
            return res.status(404).json({ msg: 'Tour not found' });
        }
        res.json(tour);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
