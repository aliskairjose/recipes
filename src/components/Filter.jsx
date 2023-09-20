import { useRef } from "react";
import PropTypes from "prop-types";

export default function Filter({ onSearchAction }) {
  const term = useRef(null)
  const onSearchChange = (e) => (term.current = e.target.value);

  return (
    <form className="">
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Buscar receta..."
          onChange={onSearchChange}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => onSearchAction(term.current)}
      >
        Buscar
      </button>
    </form>
  );
}

Filter.propTypes = {
  onSearchAction: PropTypes.func,
};
