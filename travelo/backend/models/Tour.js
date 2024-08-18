const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
    title: String,
    reviews: String,
    price: String,
    description: String,
    highlights: [String],
    itinerary: [String],
    similarExperiences: [
        {
            title: String,
            description: String,
            price: String
        }
    ]
});

module.exports = mongoose.model('Tour', TourSchema);
