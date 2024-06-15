import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState(null);

  async function fetchData(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;

    try {
      url = await fetch(url);
      const data = await url.json();
      setPage(data.page);
      setPosts(data.posts);
      setTotalpage(data.totalPages);
    } catch (error) {
      console.log(`error in feching data ${error}`);
      setPage(1);
      setTotalpage(null);
      setPosts([]);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
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
    handlePageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
