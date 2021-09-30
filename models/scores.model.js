const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    score: {
        type: Number
    }

}, {timestamps: true})

const Score = mongoose.model('Score', ScoreSchema);

module.exports = Score;