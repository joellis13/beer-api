const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: [0, 'Rating must be a number between 0 and 10 inclusively.'],
        max: [10, 'Rating must be a number between 0 and 10 inclusively.'],
        required: true
    }
});

module.exports = mongoose.model('Beer', BeerSchema);