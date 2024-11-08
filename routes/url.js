const express = require("express");
const { generateNewShortURL,handleGetAnalytics } = require("../controllers/url");
const router = express.Router();

router.post("/", generateNewShortURL);
router.post("/", generateNewShortUR);
router.get('/analytics/:shortId',handleGetAnalytics)
module.exports = router;
