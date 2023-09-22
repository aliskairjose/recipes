import { useEffect, useState } from "react";
import { recipes, recipesEdaman } from "../providers/meal";
import Spinner from "../components/Spinner";
import MealCard from "../components/MealCard";
import Filter from "../components/Filter";
import Footer from "../components/Footer";

export default function Recipe() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("&q=salad");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const getData = async () => {
      // const response = await recipes(query);
      const response = await recipesEdaman(query);
      setData(response);
      setIsLoading(false);
    };
    getData().catch(console.error);
  }, [query]);

  const onSearch = (params) => {
    setIsLoading(true);
    setQuery(params);
  };

  return (
    <div className="flex flex-wrap gap-2 pt-6">
      {isLoading ? (
        <Spinner />
      ) : (
        data?.hits.map((item, index) => (
          <MealCard meal={item.recipe} key={index} />
        ))
      )}
    </div>
  );
}
