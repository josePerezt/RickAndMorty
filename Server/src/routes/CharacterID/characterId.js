const express = require("express");
const getCharacterId = require("../../controllers/characterID.");

const characterId = express.Router();

characterId.get("/character/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const data = await getCharacterId(id);
    res.status(200).json(data);
  } catch (error) {
    error.message.includes("Id")
      ? res.status(404).json({ Error: error.message })
      : res.status(500).json({ Error: error.messaje });
  }
});

module.exports = characterId;
