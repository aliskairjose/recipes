import { createRef, useRef } from "react";
import PropTypes from "prop-types";

const DIET_COL1 = [
  { title: "Vegetarian" },
  { title: "Vegan" },
  { title: "Paleo" },
  { title: "High-Fiber" },
  { title: "High-Protein" },
  { title: "Low-Carb" },
];
const DIET_COL2 = [
  { title: "Low-Fat" },
  { title: "Low-Sodium" },
  { title: "Low-Sugar" },
  { title: "Alcohol-Free" },
  { title: "Balanced" },
  { title: "Inmunity" },
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
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Buscar receta..."
          ref={inputRef}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => onSearchAction(term.current)}
      >
        Buscar
      </button>
      <div className="my-4">
        <span className="text-sm text-gray-600">Refina la busqueda por</span>
      </div>
      <span className="text-sm block font-medium">Dieta</span>
      <div className="grid grid-cols-2 mb-4 mt-2">
        <div>
          <ul>
            <li>
              {DIET_COL1.map((item, index) => (
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
              {DIET_COL2.map((item, index) => (
                <div className="flex items-center mb-2" key={index}>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ml-2 text-sm">
                    {item.title}
                  </label>
                </div>
              ))}
            </li>
          </ul>
        </div>
        
      </div>
      <span className="text-sm font-medium">Alergia</span>
      <div className="grid grid-cols-2 mt-2">
        <div>1</div>
        <div>2</div>
      </div>
    </form>
  );
}

Filter.propTypes = {
  onSearchAction: PropTypes.func,
};
