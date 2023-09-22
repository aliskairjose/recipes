import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { recipeEdaman } from "../providers/meal";
import { useEffect } from "react";

export default function RecipeDetail() {
  const recipe = useSelector((state) => state.recipe.recipe);
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(()=>{
    const getRecipe = async ()=>{
      const response = await recipeEdaman(id)
      // setData(response)
    }

    getRecipe().catch(console.error);

  }, [data])
  
  Object.entries(recipe).length === 0 && console.log(id);

  return (
    <div className="grid grid-rows-2 w-8/12 content-center mx-auto">
      <div className="flex">
        <div className="p-4">
          <img
            className=" rounded shadow-md h-96 w-auto border border-sky-400"
            src={recipe.image}
            alt={recipe.label}
          />
        </div>
        <div className="w-1/2 text-center p-6">
          <h1 className="text-3xl">{recipe.label}</h1>
        </div>
      </div>
      <div className="flex">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
