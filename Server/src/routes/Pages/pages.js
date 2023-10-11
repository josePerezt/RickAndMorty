const express = require("express");
const pageNext = require("../../controllers/page");
const pageCharacters = express.Router();

pageCharacters.get("/characterPage", async (req, res) => {
  const { page } = req.query;
  try {
    const data = await pageNext(page);

    res.status(200).json(data);
  } catch (error) {
    error.message.includes("Page")
      ? res.status(404).json({ Error: error.message })
      : res.status(500).json({ Error: error.message });
  }
});

module.exports = pageCharacters;
