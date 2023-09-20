import { useEffect, useRef, useState } from "react";
import { recipes } from "../providers/meal";
import Spinner from "../components/Spinner";
import MealCard from "../components/MealCard";
import Filter from "../components/Filter";

export default function Meals() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState({ q: "" });
  const [isLoading, setIsLoading] = useState(true);
  const params = useRef({});

  useEffect(() => {
    const getData = async () => {
      params.current = query;
      const data = await recipes(params.current);
      setData(data);
      setIsLoading(false);
    };
    getData().catch(console.error);
  }, [query]);

  const onSearch = (_search) => {
    setIsLoading(true);
    setQuery({ q: _search });
  };

  return (
    <div className="flex flex-row xl:w-11/12 xl:mx-auto w-full gap-2 min-h-screen">
      <div className="w-1/5 p-2 bg-gray-300 pt-12">
        <Filter onSearchAction={onSearch} />
      </div>
      <div className="flex flex-row gap-4 flex-wrap w-4/5 bg-gray-100">
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
