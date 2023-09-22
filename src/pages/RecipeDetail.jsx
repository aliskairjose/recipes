import { useState } from "react";
import { useParams } from "react-router-dom";
import { recipeEdaman } from "../providers/meal";
import { useEffect } from "react";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      const response = await recipeEdaman(id);
      setRecipe(response.recipe);
    };
    getRecipe().catch(console.error);
  }, []);

  return (
    <div className="grid grid-rows-2 w-8/12 content-center mx-auto divide-y border shadow-md m-8">
      <div className="flex">
        <div className="p-4">
          <img
            className=" rounded shadow-md h-96 w-auto border border-sky-400"
            src={recipe.image}
            alt={recipe.label}
          />
        </div>
        <div className="w-1/2 p-6">
          <h1 className="text-3xl text-center mb-3">{recipe.label}</h1>
          <a
            href={recipe.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center m-0 block text-sm"
          >
            See full recipe on:{" "}
            <span className="underline">{recipe.source}</span>
          </a>
          <div className="w-full grid gap-y-1 mt-4">
            <p>
              <div className="h-2 rounded-full bg-yellow-400 w-2 inline-block mr-1"></div>
              <span className="text-gray-700 font-semibold">Meal type:</span>
              {recipe.mealType?.map((dish, i) => (
                <span key={i} className="mx-1 capitalize">
                  {dish}
                </span>
              ))}
            </p>
            <p>
              <div className="h-2 rounded-full bg-sky-400 w-2 inline-block mr-1"></div>
              <span className="text-gray-700 font-semibold">Dish type:</span>
              {recipe.dishType?.map((dish, i) => (
                <span key={i} className="mx-1 capitalize">
                  {dish}
                </span>
              ))}
            </p>
            <p>
              <div className="h-2 rounded-full bg-green-400 w-2 inline-block mr-1"></div>
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
      <div className="flex pt-2">
        <div className="w-1/2 px-8 py-4">
          <h1 className="text-lg text-gray-500 font-semibold tracking-wider border-b pb-2 mb-6">
            {recipe.ingredients?.length} Ingredients
          </h1>
          <ul className="list-outside mb-6">
            {recipe.ingredientLines?.map((item, index) => (
              <li className="" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <h1 className="text-lg text-gray-500 font-semibold tracking-wider border-b pb-2 mb-6">
            Preparation
          </h1>
        </div>
        <div className="w-1/2 px-8 py-4">
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
                190
              </span>
              <span className="text-xs"> SERVINGS </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
