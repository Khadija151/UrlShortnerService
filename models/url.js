const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    totalClicks: {
        type: String,
    },
    visitHistory: [{ timestamp: { type: Number } },
    { timestamps: true }],
});

const url = mongoose.model("url", urlSchema);

module.exports = url;