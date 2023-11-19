const shortid = require("shortid")
const URL = require('../models/url');

async function handleGenerateNewURL(req, res) {
    if (!req.body.url) {
        return res.status(400).json({ msg: "URL is required" })
    }
    console.log(req.body.url)
    const redirectUrl = req.body.url;
    const shortId = shortid();
    await URL.create({
        shortId: shortId,
        redirectUrl: redirectUrl,
        visitHistory: [],
        createdBy: req.user._id
    })
    return res.status(200).json({ id: shortId });
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

module.exports = {
    handleGenerateNewURL,
    handleGetAnalytics,
};