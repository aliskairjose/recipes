import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import RecipeCard from "../components/RecipeCard";
import { useEffect } from "react";
import { addParams } from "../features/slices/recipeSlice";

export default function Recipe() {
  const recipes = useSelector((state) => state.recipe.recipes);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [recipes]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    const {more, from, to} = recipes;
    (more) && fetchData({from, to});
  };

  const fetchData = ({from, to}) => {
    from = to + 1
    to += 10
    dispatch(addParams({ from, to }));
  };

  return (
    <div className="flex flex-wrap gap-2 pt-6">
      {isLoading}
      {isLoading ? (
        <Spinner />
      ) : (
        recipes.hits?.map((item, index) => (
          <RecipeCard recipe={item.recipe} key={index} />
        ))
      )}
    </div>
  );
}
