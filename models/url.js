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
    visitHistory: [{ timestamp: { type: Number } }, { timestamps: true }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }
});

const url = mongoose.model("url", urlSchema);

module.exports = url;