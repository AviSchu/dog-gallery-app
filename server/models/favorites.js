const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

favoriteSchema.index(
    { user_id: 1, url: 1 },
    { unique: true }
);

const favorites = mongoose.model('favorites', favoriteSchema);

module.exports = favorites;