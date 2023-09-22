import { useSelector } from "react-redux";

export default function RecipeDetail() {
  const recipe = useSelector((state) => state.recipe.recipe);

  return (
    <div className="grid grid-rows-2 w-8/12 content-center mx-auto">
      <div className="flex">
        <div className="p-4">
          <img
            className="p-2 h-96 w-auto"
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
