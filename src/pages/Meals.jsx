import React, { useEffect, useState } from "react";
import { recipes } from "../providers/meal";
import Spinner from "../components/Spinner";
import MealCard from "../components/MealCard";

export default function Meals() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await recipes();
      setData(data);
      setIsLoading(false);
    };
    getData().catch(console.error);
  }, []);

  return (
    <div className="flex flex-row xl:w-10/12 xl:mx-auto w-full bg-gray-100 gap-2">
      <div className="w-1/6">1</div>
      <div className="flex flex-row gap-2 flex-wrap w-5/6 ">
        {data?.hits.map((item, index) => (
          <MealCard meal={item.recipe} key={index} />
        ))}
      </div>
    </div>
  );
}
