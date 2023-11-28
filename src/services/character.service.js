import axios from "axios";

export const getCharacters = (callback) => {
  axios
    .get("https://genshin-prodigy-9c634bc19ab3.herokuapp.com/character")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      callback(error);
    });
};
