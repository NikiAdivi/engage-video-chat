const express = require("express");
const router = express.Router();
const controller = require('./controller');

router.post("/api/save-call", controller.saveCall);
router.get("/api/get-call/:id", controller.getCall);

module.exports = router;