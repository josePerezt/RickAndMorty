const axios = require("axios");

const allCharacters = async () => {
  const ALL_URL = "https://rickandmortyapi.com/api/character";
  const { data } = await axios(ALL_URL);

  if (!data) throw new Error("Data Not Found");

  const { info } = data;
  const { results } = data;

  const cleanData = results.map(
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

  const result = {
    info,
    cleanData,
  };

  return result;
};

module.exports = allCharacters;
