import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

function Blog() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>No Post Found</div>
      ) : (
        posts.map((post) => {
          <div key={post.id}>
            <p>{post.title}</p>
            <p>
              By <span>{post.author}</span> on <span>{post.category}</span>
            </p>
            <p>
              Posted On <span>{post.date}</span>
            </p>
            <p>{post.content}</p>
            <p>
              {post.tags.map((tag, index) => {
                return <span key={index}>{`# ${tag}`}</span>;
              })}
            </p>
          </div>;
        })
      )}
    </div>
  );
}

export default Blog;
