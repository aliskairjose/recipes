import PropTypes from "prop-types";

export default function MealCard({ meal }) {
  return (
    <div className="h-[24.5rem] lg:w-[18.5rem] w-80 rounded overflow-hidden shadow-md border border-gray-300">
      <img className="p-2 h-72 w-full" src={meal.image} alt={meal.label} />
      <div className="px-2">
        <div className="text-sm h-10 overflow-hidden">{meal.label}</div>
        <div className="flex justify-around uppercase text-xs my-2">
          <div>
            <span className="me-1 text-sky-600 font-semibold">180</span>
            <span>Calorias</span>
          </div>
          <div>
            <span className="me-1 text-sky-600 font-semibold">{meal.ingredients.length}</span>
            <span>Ingredientes</span>
          </div>
        </div>
        <a href={meal.url} className="text-xs text-gray-500 font-semibold">
          {meal.source}
        </a>
      </div>
    </div>
  );
}

MealCard.propTypes = {
  meal: PropTypes.object,
};
