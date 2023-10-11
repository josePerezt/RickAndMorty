const axios = require("axios");

const pageNext = async (id) => {
  if (id > 46) throw new Error("Page not Found");
  const UrlPage = `https://rickandmortyapi.com/api/character?page=${id}`;

  const { data } = await axios(UrlPage);
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
  const newData = {
    info,
    cleanData,
  };
  // console.log(newData);
  return newData;
};

module.exports = pageNext;
