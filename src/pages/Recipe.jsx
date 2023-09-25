import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import RecipeCard from "../components/RecipeCard";
import { useEffect } from "react";
import { addParams } from "../features/slices/recipeSlice";

export default function Recipe() {
  const recipes = useSelector((state) => state.recipe.recipes);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const isError = useSelector((state) => state.error.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [recipes, isError]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }

    const { more, from, to } = recipes;
    more && !isError && fetchData({ from, to });
  };

  const fetchData = ({ from, to }) => {
    from = to + 1;
    to += 10;
    dispatch(addParams({ from, to }));
  };

  return (
    <>
      <div
        className={`
        bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative
        ${isError ? 'visible' : 'invisible'}
        `}
        role="alert"

      >
        <strong className="font-bold">Holy smokes! </strong>
        <span className="block sm:inline">
          Something seriously bad happened.
        </span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
      <div className="flex flex-wrap gap-2 pt-6">
        {isLoading ? (
          <Spinner />
        ) : (
          recipes.hits?.map((item, index) => (
            <RecipeCard recipe={item.recipe} key={index} />
          ))
        )}
      </div>
    </>
  );
}
