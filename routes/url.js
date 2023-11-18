const express = require('express');
const { handleGenerateNewURL, handleGetAnalytics } = require('../controllers/url');
const { URL } = require('../models/url')

const router = express.Router();

router.post('/', handleGenerateNewURL)
router.get("/analytics/:shortId", handleGetAnalytics);


module.exports = router;