import axios from "axios";

const appID = import.meta.env.VITE_APP_ID;
const appKEY = import.meta.env.VITE_API_KEY;

const instanceV1 = axios.create({
  baseURL: "https://api.edamam.com/",
  params: {
    app_key: appKEY,
    app_id: appID,
  },
});

const instanceV2 = axios.create({
  baseURL: "https://www.edamam.com/api/recipes/",
});

const slugV2 = `?type=public`;

// PUBLIC KEY
export const recipes = async (data) => {
  const { slugs, params } = data;
  return await instanceV1
    .get(`search${slugs}`, { params })
    .then((response) => response.data)
    .catch(console.error);
};

export const recipeById = async (uri) => {
  return await instanceV1
    .get(`v1/${uri}`)
    .then((response) => response.data)
    .catch(console.error);
};

// EDEMAN

export const recipesEdaman = async (params) => {
  return await instanceV2
    .get(`v2${slugV2}${params}`)
    .then((response) => response.data)
    .catch(console.error);
};

export const recipeEdaman = async (uri) => {
  return await instanceV2
    .get(`v2/${uri}${slugV2}`)
    .then((response) => response.data)
    .catch(console.error);
};


