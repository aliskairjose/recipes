import axios from "axios";

const appID = import.meta.env.VITE_APP_ID;
const appKEY = import.meta.env.VITE_API_KEY;

const instanceV1 = axios.create({
  baseURL: "https://api.edamam.com/",
  params: {
    app_id: appID,
    app_key: appKEY,
  },
});

const instanceV2 = axios.create({
  baseURL: "https://www.edamam.com/api/recipes/",
  params: {
    type: "public",
  },
});

// PUBLIC KEY
export const recipes = async (data) => {
  const { slug, params } = data;
  return await instanceV1
    .get(`search${slug}`, { params })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
};

export const recipeById = async (uri) => {
  return await instanceV1
    .get(`v1/${uri}`)
    .then((response) => response.data)
    .catch(console.error);
};

// EDEMAN

export const recipesEdaman = async (data) => {
  const { slug, params } = data;
  return await instanceV2
    .get(`v2${slug}`, { params })
    .then((response) => response.data)
    .catch(console.error);
};

export const recipeEdaman = async (uri) => {
  return await instanceV2
    .get(`v2/${uri}`)
    .then((response) => response.data)
    .catch(console.error);
};
