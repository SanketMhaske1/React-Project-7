import React, { useContext, useEffect } from "react";
import Heading from "./Components/Heading";
import Blog from "./Components/Blog";
import Pagination from "./Components/Pagination";
import { AppContext } from "./Context/AppContext";

export default function App() {
  const { fetchData } = useContext(AppContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Heading />
      <Blog />
      <Pagination />
    </div>
  );
}
