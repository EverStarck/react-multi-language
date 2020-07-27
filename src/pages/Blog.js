import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import postsManager from "../post/postsManager.json";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = postsManager.data;
    setPosts(posts);
  }, []);

  return (
    <>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.id}>
        <Link to={`/post/${post.slug}`}>
        <h3>{post.blogTitle}</h3>
        </Link>
        <p>{post.postedOn}</p>
        <p>{post.blogTextMin}</p>
        </div >
      ))}
    </>
  );
};

export default Blog;
