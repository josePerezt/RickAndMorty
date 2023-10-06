const axios = require("axios");

const allCharacters = async () => {
  const ALL_URL = "https://rickandmortyapi.com/api/character";
  const { data } = await axios(ALL_URL);

  const cleanData = data.results.map(
    ({ id, name, status, species, gender, origin, location, image }) => {
      return {
        id,
        name,
        status,
        species,
        gender,
        origin: origin.name,
        location: location.name,
        image,
      };
    }
  );
  if (!cleanData) throw new Error("Data Not Found");
  return cleanData;
};

module.exports = allCharacters;
