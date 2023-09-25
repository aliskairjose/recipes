import { useState } from "react";
import { useParams } from "react-router-dom";
import { recipeEdaman } from "../providers/api";
import { useEffect } from "react";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      const response = await recipeEdaman(id);
      setRecipe(response);
    };
    getRecipe().catch(console.error);
  }, []);

  return (
    <div className="flex flex-col xl:w-8/12 w-11/12 content-center mx-auto md:my-8 my-6 divide-y border shadow-md ">
      <div className="flex md:flex-row flex-col md:mb-0 mb-4">
        <div className="xl:py-6 xl:px-4 p-2 md:w-1/2 w-full">
          <img
            className="mx-auto rounded-md shadow-md md:w-auto w-full border border-sky-400"
            src={recipe.image}
            alt={recipe.label}
          />
        </div>
        <div className="xl:py-6 xl:px-4 p-4 md:w-1/2 w-full">
          <h1 className="lg:text-3xl text-2xl text-center mb-3 tracking-wide">{recipe.label}</h1>
          <a
            href={recipe.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center m-0 block text-sm"
          >
            {"See full recipe on:"}
            <span className="underline ms-1">{recipe.source}</span>
          </a>
          <div className="w-full grid gap-y-1 mt-4">
            <p>
              <span className="h-3 w-3 rounded-full bg-yellow-400 inline-block mr-1"></span>
              <span className="text-gray-700 font-semibold">Meal type:</span>
              {recipe.mealType?.map((dish, i) => (
                <span key={i} className="mx-1 capitalize">
                  {dish}
                </span>
              ))}
            </p>
            <p>
              <span className="h-3 w-3 rounded-full bg-sky-400 inline-block mr-1"></span>
              <span className="text-gray-700 font-semibold">Dish type:</span>
              {recipe.dishType?.map((dish, i) => (
                <span key={i} className="mx-1 capitalize">
                  {dish}
                </span>
              ))}
            </p>
            <p>
              <span className="h-3 w-3 rounded-full bg-green-400 inline-block mr-1"></span>
              <span className="text-gray-700 font-semibold">Cuisine type:</span>
              {recipe.cuisineType?.map((dish, i) => (
                <span key={i} className="mx-1 capitalize">
                  {dish}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col pt-2">
        <div className="md:w-1/2 w-full xl:px-8 p-4">
          <h1 className="text-lg text-gray-500 font-semibold tracking-wider border-b pb-2 mb-6">
            {recipe.ingredients?.length} Ingredients
          </h1>
          <ul className="list-outside space-y-2 capitalize">
            {recipe.ingredientLines?.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <h1 className="text-lg text-gray-500 font-semibold tracking-wider border-b pb-2 my-6">
            Preparation
          </h1>
        </div>
        <div className="md:w-1/2 w-full xl:px-8 p-4">
          <h1 className="text-lg text-gray-500 font-semibold tracking-wider border-b pb-2">
            Nutrition
          </h1>
          <div className="flex justify-around py-4 border-b">
            <p className="text-center">
              <span className="text-xl block py-1 px-6">190 </span>
              <span className="text-xs">CALORIES / SERVING</span>
            </p>
            <p className="text-center">
              <span className="text-xl block py-1 px-6">190</span>
              <span className="text-xs">DAILY VALUE</span>
            </p>
            <p className="text-center">
              <span className="text-xl block border py-1 px-6 rounded shadow-inner">
                {recipe.yield}
              </span>
              <span className="text-xs"> SERVINGS </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
