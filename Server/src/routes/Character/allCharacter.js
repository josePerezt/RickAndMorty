const express = require("express");
const allCharacterRouter = express.Router();
const axios = require("axios");
const allCharacters = require("../../controllers/allCharacter.");

allCharacterRouter.get("/characters", async (req, res) => {
  try {
    const data = await allCharacters();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = allCharacterRouter;
