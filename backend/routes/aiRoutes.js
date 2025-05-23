const express = require("express");
const router = express.Router();
const aiController = require("../controllers/aiController");

router.post("/ai/suggest", aiController.getRecipeSuggestion);

module.exports = router;
