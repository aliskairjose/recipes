import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import RecipeCard from "../components/RecipeCard";

export default function Recipe() {
  const recipes = useSelector((state) => state.recipe.recipes);
  const isLoading = useSelector(state => state.loading.isLoading)

  return (
    <div className="flex flex-wrap gap-2 pt-6">
      {isLoading}
       {isLoading ? (
        <Spinner />
      ) : (
        recipes.hits?.map((item, index) => (
          <RecipeCard recipe={item.recipe} key={index} />
        ))
      )}
    </div>
  );
}
