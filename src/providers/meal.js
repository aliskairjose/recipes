import axios from "axios";

const appID = import.meta.env.VITE_APP_ID;
const appKEY = import.meta.env.VITE_API_KEY;

const instanceV1 = axios.create({
  baseURL: "https://api.edamam.com/",
});

const instanceV2 = axios.create({
  baseURL: "https://www.edamam.com/api/recipes/",
});

const slugV1 = `?app_id=${appID}&app_key=${appKEY}`
const slugV2 = `?type=public`;

export const recipes = async (params) => {
  return await instanceV1
    .get(`search${slugV1}${params}`)
    .then((response) => response.data)
    .catch(console.error);
};

export const recipesEdaman = async (params) => {
  return await instanceV2
    .get(`v2${slugV2}${params}`)
    .then((response) => response.data)
    .catch(console.error);
};