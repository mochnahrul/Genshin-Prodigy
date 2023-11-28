import axios from "axios";

export const getCharacterBuild = (name, callback) => {
  axios
    .get(`https://genshin-prodigy-9c634bc19ab3.herokuapp.com/build/${name}`)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      callback(error);
    });
};
