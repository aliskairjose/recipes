import React, { useEffect, useRef, useState } from "react";
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
    console.log(_search)
    setIsLoading(true);
    setQuery(_search)
  }
  
  return (
    <div className="flex flex-row xl:w-10/12 xl:mx-auto w-full bg-gray-100 gap-2">
      <div className="w-1/6 p-2">
        <Filter onSearchAction={onSearch} />
      </div>
      <div className="flex flex-row gap-2 flex-wrap w-5/6 ">
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
