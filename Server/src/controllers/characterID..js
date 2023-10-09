const axios = require("axios");

const getCharacterId = async (id) => {
  if (id > 826) throw new Error(`Character Id ${id} not found`);
  const { data } = await axios(
    `https://rickandmortyapi.com/api/character/${id} `
  );

  const { name, status, species, gender, origin, location, image } = data;

  const newData = {
    name,
    status,
    species,
    gender,
    origin: origin.name,
    location: location.name,
    image,
  };
  return newData;
};
module.exports = getCharacterId;
