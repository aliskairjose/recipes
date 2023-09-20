import axios from "axios";

const appID = import.meta.env.VITE_APP_ID;
const appKEY = import.meta.env.VITE_API_KEY;

const instance = axios.create({
  baseURL: `https://api.edamam.com/search?app_id=${appID}&app_key=${appKEY}&q=&diet=high-fiber&diet=low-carb`,
});

export const recipes = async () => {
  return await instance.get()
  .then(response => response.data)
  .catch(console.error)
};
