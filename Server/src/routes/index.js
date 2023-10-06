const express = require("express");
const allCharacterRouter = require("./Character/allCharacter");
const router = express.Router();

router.use("/", allCharacterRouter);

module.exports = router;
