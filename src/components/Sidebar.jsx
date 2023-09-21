import { useEffect, useState } from "react";
import { recipes, recipesEdaman } from "../providers/meal";
import Filter from "./Filter";

export default function Sidebar() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("&q=");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // window.addEventListener("resize", () => {
    //   setSidebarStatus(isDesktop());
    // });
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
    <aside className="flex-shrink w-[280px] px-4">
      <Filter onSearchAction={onSearch} />
    </aside>
  );
}
