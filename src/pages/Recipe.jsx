import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import RecipeCard from "../components/RecipeCard";
import { useEffect } from "react";

export default function Recipe() {
  const recipes = useSelector((state) => state.recipe.recipes);
  const isLoading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    console.log('data')
    // fetchData();
  };

  useEffect(()=>{
  },[_recipes])

  return (
    <div className="flex flex-wrap gap-2 pt-6">
      {isLoading}
      {isLoading ? (
        <Spinner />
      ) : (
        _recipes?.hits?.map((item, index) => (
          <RecipeCard recipe={item.recipe} key={index} />
        ))
      )}
    </div>
  );
}
