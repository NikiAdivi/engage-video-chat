import axios from "axios";

export const postRequest = async (url, payload = {}) => {
  const data = await axios
    .post(url, payload)
    .then((resp) => resp.data)
    .catch((err) => ({ error: err.response.data }));
  return data;
};

export const getRequest = async (url) => {
  const data = await axios
    .get(url)
    .then((resp) => resp.data)
    .catch((err) => ({ error: err.response.data }));
  return data;
};
