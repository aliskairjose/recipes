import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { addRecipe } from "../features/slices/recipeSlice";
import { useDispatch } from "react-redux";

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const goTo = () => {
    const uri = recipe.uri.split('_')[1]
    dispatch(addRecipe(recipe))
    navigate(`./detail/${uri}`);
  };

  return (
    <div
      className="h-[24.5rem] lg:w-[18.5rem] w-80 rounded overflow-hidden shadow-md border border-gray-300 lg:mx-0 mx-auto"
      onClick={goTo}
    >
      <img className="p-2 h-72 w-full" src={recipe.image} alt={recipe.label} />
      <div className="px-2">
        <div className="text-sm h-10 overflow-hidden">{recipe.label}</div>
        <div className="flex justify-around uppercase text-xs my-2">
          <div>
            <span className="me-1 text-sky-600 font-semibold">{Math.floor(recipe.calories)/10}</span>
            <span>Calorias</span>
          </div>
          <div>
            <span className="me-1 text-sky-600 font-semibold">
              {recipe.ingredients.length}
            </span>
            <span>Ingredientes</span>
          </div>
        </div>
        <a href={recipe.url} className="text-xs text-gray-500 font-semibold">
          {recipe.source}
        </a>
      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.object,
};
