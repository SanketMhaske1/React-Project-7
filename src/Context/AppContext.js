import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

function AppContextProvider({ childern }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState(null);

  async function fetchData(page = 1) {
    setLoading(true);
    let baseUrl = `${baseUrl}?page=${page}`;
    try {
      const url = await fetch();
      const result = await url.json(baseUrl);
      console.log(result);
      console.log(result);
      setPage(result.page);
      setTotalpage(result.totalpage);
      setPosts(result.page);
    } catch (error) {
      console.log(`error in feching data ${error}`);
    }
    setLoading(false);
  }

  function handlePageChnage(page) {
    setPage(page);
    fetchData(page);
  }

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalpage,
    setTotalpage,
    fetchData,
  };

  return <AppContext.Provider value={value}>{childern}</AppContext.Provider>;
}
