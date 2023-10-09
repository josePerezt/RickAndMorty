const express = require("express");
const allCharacterRouter = require("./Character/allCharacter");
const characterId = require("./CharacterID/characterId");
const router = express.Router();

router.use("/", allCharacterRouter);
router.use("/", characterId);

module.exports = router;
