import MealCard from "../components/MealCard";
import { useSelector } from "react-redux";

export default function Recipe() {
  const recipes = useSelector((state) => state.recipe.recipes);

  return (
    <div className="flex flex-wrap gap-2 pt-6">
      {recipes.hits?.map((item, index) => (
          <MealCard meal={item.recipe} key={index} />
        ))}
    </div>
  );
}
