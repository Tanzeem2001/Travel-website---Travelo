const express = require('express');
const Destination = require('../models/Destination');

const router = express.Router();

// Route to get all destinations
router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find();  // This will fetch data from the 'destinationsData' collection
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
