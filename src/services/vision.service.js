import axios from "axios";

export const getVisions = (callback) => {
  axios
    .get("https://genshin-prodigy-9c634bc19ab3.herokuapp.com/vision")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      callback(error);
    });
};
