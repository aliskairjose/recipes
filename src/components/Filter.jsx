import { createRef, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addRecipes } from "../features/slices/recipeSlice";
import { addResponseError } from "../features/slices/errorSlice";
import { isLoading } from "../features/slices/loadingSlice";
import { recipes, recipesEdaman } from "../providers/api";

const DIETS_COL1 = [
  {
    checked: false,
    value: "vegetarian",
    title: "Vegetarian",
    type: "health",
  },
  {
    checked: false,
    value: "vegan",
    title: "Vegan",
    type: "health",
  },
  {
    checked: false,
    value: "paleo",
    title: "Paleo",
    type: "health",
  },
  {
    checked: false,
    value: "high-fiber",
    title: "High-Fiber",
    type: "diet",
  },
  {
    checked: false,
    value: "high-protein",
    title: "High-Protein",
    type: "diet",
  },
  {
    checked: false,
    value: "low-carb",
    title: "Low-Carb",
    type: "diet",
  },
];
const DIETS_COL2 = [
  {
    checked: false,
    value: "low-fat",
    title: "Low-Fat",
    type: "diet",
  },
  {
    checked: false,
    value: "low-sodium",
    title: "Low-Sodium",
    type: "diet",
  },
  {
    checked: false,
    value: "low-sugar",
    title: "Low-Sugar",
    type: "health",
  },
  {
    checked: false,
    value: "alcohol-free",
    title: "Alcohol-Free",
    type: "health",
  },
  {
    checked: false,
    value: "Balanced",
    title: "Balanced",
    type: "health",
  },
  {
    checked: false,
    value: "immuno-supportive",
    title: "Inmunity",
    type: "health",
  },
];
const ALLERGIES_COL1 = [
  {
    checked: false,
    value: "gluten-free",
    title: "Gluten",
    type: "health",
  },
  {
    checked: false,
    value: "dairy",
    title: "Dairy",
    type: "health",
  },
  {
    checked: false,
    value: "eggs-free",
    title: "Eggs",
    type: "health",
  },
  {
    checked: false,
    value: "soy-free",
    title: "Soy",
    type: "health",
  },
  {
    checked: false,
    value: "wheat-free",
    title: "Wheat",
    type: "health",
  },
];
const ALLERGIES_COL2 = [
  {
    checked: false,
    value: "fish-free",
    title: "Fish",
    type: "health",
  },
  {
    checked: false,
    value: "shellfish-free",
    title: "Shellfish",
    type: "health",
  },
  {
    checked: false,
    value: "tree-nut-free",
    title: "Tree Nuts",
    type: "health",
  },
  {
    checked: false,
    value: "peanut-free",
    title: "Peanuts",
    type: "health",
  },
];
export default function Filter() {
  const dispatch = useDispatch();
  const paramSelector = useSelector((state) => state.recipe.params);
  const queryParams = useRef(null);
  const [query, setQuery] = useState(null);
  const inputRef = createRef();
  const hitsRef = useRef([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      if (Object.entries(paramSelector).length > 0) {
        dispatch(isLoading(true));
        query.params = { ...query.params, ...paramSelector };
      }
      const response = await recipes(query);

      dispatch(isLoading(false));
      dispatch(addResponseError(Boolean(response.status)));

      hitsRef.current = [...hitsRef.current, ...response.hits];
      dispatch(addRecipes({ ...response, hits: hitsRef.current }));
    };
    getData().catch(console.error);
  }, [query, paramSelector]);

  const onSearchChange = ({ target }) =>
    (queryParams.current = { q: target.value });

  const onClickHandler = () => formatParams();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    formatParams();
  };

  const formatParams = () => {
    hitsRef.current = [];
    const list = [
      ...DIETS_COL1,
      ...DIETS_COL2,
      ...ALLERGIES_COL1,
      ...ALLERGIES_COL2,
    ];
    let slug = "";
    list.map((d) => d.checked && (slug += `?${d.type}=${d.value}`));

    dispatch(isLoading(true));
    setQuery({ slug, params: queryParams.current });
  };

  const checkboxHandle = ({ target }) => {
    const { checked, value, id } = target;
    if (value === "DIETS_COL1") {
      DIETS_COL1.map((item) => {
        if (item.value === id) {
          return (item.checked = checked);
        }
      });
      return;
    }
    if (value === "DIETS_COL2") {
      DIETS_COL2.map((item) => {
        if (item.value === id) {
          return (item.checked = checked);
        }
      });
      return;
    }
    if (value === "ALLERGIES_COL1") {
      ALLERGIES_COL1.map((item) => {
        if (item.value === id) {
          return (item.checked = checked);
        }
      });
      return;
    }
    if (value === "ALLERGIES_COL2") {
      ALLERGIES_COL2.map((item) => {
        if (item.value === id) {
          return (item.checked = checked);
        }
      });
      return;
    }
  };

  return (
    <form className="" onSubmit={handleOnSubmit}>
      <div className="mb-4 flex flex-col justify-center items-center">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="search"
          type="search"
          placeholder="Buscar receta..."
          ref={inputRef}
          onChange={onSearchChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline w-1/2 shadow-md"
          type="button"
          onClick={onClickHandler}
        >
          Search
        </button>
      </div>
      <div className="my-4">
        <span className="text-sm text-gray-600 font-light">
          Refine search by
        </span>
      </div>

      <span className="text-sm block">Diet</span>
      <div className="grid xl:grid-cols-2 grid-cols-1 mb-4 mt-2">
        <div>
          <ul>
            <li>
              {DIETS_COL1.map((item, index) => (
                <div className="flex items-center mb-2" key={index}>
                  <input
                    id={item.value}
                    type="checkbox"
                    value="DIETS_COL1"
                    onChange={checkboxHandle}
                    className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ml-2 text-sm text-gray-500 font-medium">
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
                    id={item.value}
                    type="checkbox"
                    value="DIETS_COL2"
                    className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={checkboxHandle}
                  />
                  <label className="ml-2 text-sm text-gray-500 font-medium">
                    {item.title}
                  </label>
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <div className="border my-4"></div>

      <span className="text-sm">Allergies</span>
      <div className="grid xl:grid-cols-2 grid-cols-1 mb-4 mt-2">
        <div>
          <ul>
            <li>
              {ALLERGIES_COL1.map((item, index) => (
                <div className="flex items-center mb-2" key={index}>
                  <input
                    id={item.value}
                    type="checkbox"
                    value={item.value}
                    className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={checkboxHandle}
                  />
                  <label className="ml-2 text-sm text-gray-500 font-medium">
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
                    id={item.value}
                    type="checkbox"
                    value={item.value}
                    className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={checkboxHandle}
                  />
                  <label className="ml-2 text-sm text-gray-500 font-medium">
                    {item.title}
                  </label>
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
