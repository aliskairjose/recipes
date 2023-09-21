import { useEffect, useRef, useState } from "react";
import { recipes } from "../providers/meal";
import Spinner from "../components/Spinner";
import MealCard from "../components/MealCard";
import Filter from "../components/Filter";

export default function Meals() {
  const params = useRef({});
  const [data, setData] = useState(null);
  const [query, setQuery] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    params.current = query;
    const getData = async () => {
      const response = await recipes(params.current);
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
    <div className="flex flex-row xl:w-11/12 xl:mx-auto w-full gap-2 min-h-screen py-8">
      <div className="w-1/5 p-2 border rounded border-gray-300 pt-8">
        <Filter onSearchAction={onSearch} />
      </div>
      <div className="flex flex-row gap-2 flex-wrap w-4/5">
        {isLoading ? (
          <Spinner />
        ) : (
          data?.hits.map((item, index) => (
            <MealCard meal={item.recipe} key={index} />
          ))
        )}
      </div>
    </div>
  );
}
