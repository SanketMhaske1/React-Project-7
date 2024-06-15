import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import "../App.css";
function Blog() {
  const {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalpage,
    setTotalpage,
    fetchData,
  } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[700px] py-3 flex flex-col gap-y-6  mt-[66px] mb-[70px]">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>No Post Found</div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold">{post.title}</p>
            <p className="text-[12px]">
              By <span className="italic">{post.author}</span> on
              <span className="underline font-bold"> {post.category}</span>
            </p>
            <p className="text-[12px]">
              Posted On <span>{post.date}</span>
            </p>
            <p className="text-[15px]">{post.content}</p>
            <p className="flex gap-x-3">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-[10px] font-bold text-blue-500 underline"
                >{`# ${tag} `}</span>
              ))}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Blog;
