import MealCard from "../components/MealCard";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";

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
          <MealCard meal={item.recipe} key={index} />
        ))
      )}
    </div>
  );
}
