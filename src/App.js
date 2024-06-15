import React, { useContext, useEffect } from "react";
import Heading from "./Components/Heading";
import Blog from "./Components/Blog";
import Pagination from "./Components/Pagination";
import { AppContext } from "./Context/AppContext";

export default function App() {
  const { fetchData } = useContext(AppContext);

  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Heading />
      <Blog />
      <Pagination />
    </div>
  );
}
