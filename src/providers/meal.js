import axios from "axios";

const appID = import.meta.env.VITE_APP_ID;
const appKEY = import.meta.env.VITE_API_KEY;

const instance = axios.create({
  baseURL: "https://api.edamam.com/",
  // params: {
  //   app_id: appID,
  //   app_key: appKEY,
  //   q: "",
  // },
});
const slug = `?app_id=${appID}&app_key=${appKEY}`

export const recipes = async (params) => {
  console.log(params)
  return await instance
    .get(`search${slug}${params}`)
    .then((response) => response.data)
    .catch(console.error);
};
