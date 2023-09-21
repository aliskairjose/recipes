import axios from "axios";

const appID = import.meta.env.VITE_APP_ID;
const appKEY = import.meta.env.VITE_API_KEY;

const instance = axios.create({
  // baseURL: "https://api.edamam.com/",
  baseURL: "https://www.edamam.com/api/recipes/",
});
// const slug = `?app_id=${appID}&app_key=${appKEY}`
const slug = `?type=public`;

export const recipes = async (params) => {
  return await instance
    // .get(`search${slug}${params}`)
    .get(`v2${slug}${params}`)
    .then((response) => response.data)
    .catch(console.error);
};
