import { createRef, useRef } from "react";
import PropTypes from "prop-types";

export default function Filter({ onSearchAction }) {
  const term = useRef(null)
  const inputRef = createRef();
  const onSearchChange = (e) => (term.current = e);
  const handleOnSubmit = (e) => {
    e.preventDefault()
    onSearchAction(inputRef.current.value)
  }

  return (
    <form className="" onSubmit={handleOnSubmit}>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Buscar receta..."
          ref={inputRef}
          onChange={(event)=>onSearchChange(event.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
