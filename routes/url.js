const express = require('express');
const { handleGenerateNewURL } = require('../controllers/url');
const { URL } = require('../models/url')

const router = express.Router();

router.post('/', handleGenerateNewURL)


module.exports = router;