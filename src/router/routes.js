const { Router } = require("express");
const { controllerNumber } = require("../controller/controllerNumber");
const router = Router();

router.post("/validate-number", controllerNumber);

module.exports = { router };
