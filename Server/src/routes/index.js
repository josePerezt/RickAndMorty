const express = require("express");
const allCharacterRouter = require("./Character/allCharacter");
const characterId = require("./CharacterID/characterId");
const pageCharacters = require("./Pages/pages");
const router = express.Router();

router.use("/", allCharacterRouter);
router.use("/", pageCharacters);
router.use("/", characterId);

module.exports = router;
