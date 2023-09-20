import { createRef, useRef } from "react";
import PropTypes from "prop-types";

const DIETS_COL1 = [
  { title: "Vegetarian" },
  { title: "Vegan" },
  { title: "Paleo" },
  { title: "High-Fiber" },
  { title: "High-Protein" },
  { title: "Low-Carb" },
];
const DIETS_COL2 = [
  { title: "Low-Fat" },
  { title: "Low-Sodium" },
  { title: "Low-Sugar" },
  { title: "Alcohol-Free" },
  { title: "Balanced" },
  { title: "Inmunity" },
];

const ALLERGIES_COL1 = [
  { title: "Gluten" },
  { title: "Dairy" },
  { title: "Eggs" },
  { title: "Soy" },
  { title: "Wheat" },
];
const ALLERGIES_COL2 = [
  { title: "Fish" },
  { title: "Shellfish" },
  { title: "Tree Nuts" },
  { title: "Peanuts" },
];

export default function Filter({ onSearchAction }) {
  const term = useRef(null);
  const inputRef = createRef();
  const onSearchChange = (e) => (term.current = e);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSearchAction(inputRef.current.value);
  };

  return (
    <form className="" onSubmit={handleOnSubmit}>
      <div className="mb-4 flex flex-col justify-center items-center">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Buscar receta..."
          ref={inputRef}
          onChange={(event) => onSearchChange(event.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline w-1/2"
          type="button"
          onClick={() => onSearchAction(term.current)}
        >
          Search
        </button>
      </div>
      <div className="my-4">
        <span className="text-sm text-gray-600 font-light">
          Refine search by
        </span>
      </div>
      
      <span className="text-sm block font-medium">Diet</span>
      <div className="grid grid-cols-2 mb-4 mt-2">
        <div>
          <ul>
            <li>
              {DIETS_COL1.map((item, index) => (
                <div className="flex items-center mb-2" key={index}>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ml-2 text-sm text-gray-900 dark:text-gray-300">
                    {item.title}
                  </label>
                </div>
              ))}
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              {DIETS_COL2.map((item, index) => (
                <div className="flex items-center mb-2" key={index}>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ml-2 text-sm">{item.title}</label>
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <span className="text-sm font-medium">Allergies</span>
      <div className="grid grid-cols-2 mb-4 mt-2">
        <div>
          <ul>
            <li>
              {ALLERGIES_COL1.map((item, index) => (
                <div className="flex items-center mb-2" key={index}>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ml-2 text-sm text-gray-900 dark:text-gray-300">
                    {item.title}
                  </label>
                </div>
              ))}
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              {ALLERGIES_COL2.map((item, index) => (
                <div className="flex items-center mb-2" key={index}>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ml-2 text-sm">{item.title}</label>
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}

Filter.propTypes = {
  onSearchAction: PropTypes.func,
};
