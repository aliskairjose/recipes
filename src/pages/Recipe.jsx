import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import RecipeCard from "../components/RecipeCard";
import { useEffect, useRef } from "react";

export default function Recipe() {
  // const recipes =  useRef(null)
  const _recipes = useSelector((state) => state.recipe.recipes);
  const isLoading = useSelector(state => state.loading.isLoading)

  useEffect(()=>{
  },[_recipes])

  return (
    <div className="flex flex-wrap gap-2 pt-6">
      {isLoading}
       {isLoading ? (
        <Spinner />
      ) : (
        _recipes?.hits?.map((item, index) => (
          <RecipeCard recipe={item.recipe} key={index} />
        ))
      )}
    </div>
  );
}
