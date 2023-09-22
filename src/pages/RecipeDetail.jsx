import { useSelector } from "react-redux";

export default function RecipeDetail() {
  const recipe = useSelector(state => state.recipe.recipe)

  return (
    <div>{recipe.label}</div>
  )
}
