import { useEffect, useState } from "react";
import { recipes, recipesEdaman } from "../providers/meal";
import Spinner from "../components/Spinner";
import MealCard from "../components/MealCard";
import Filter from "../components/Filter";
import Footer from "../components/Footer";

export default function Meals() {
  const isDesktop = () => document.body.clientWidth > 768;
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("&q=");
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarStatus, setSidebarStatus] = useState("");

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSidebarStatus(isDesktop());
    });
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
    <div className="flex flex-wrap w-[calc(100%-280px)] gap-2">
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
