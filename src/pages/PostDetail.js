import React, { useState, useEffect } from "react";
import postsManager from "../post/postsManager.json";

const PostDetail = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const slug = props.match.params.slug;
    const post = postsManager.data.find((post) => post.slug === slug);
    setPost(post);

  }, [post, props.match.params.slug]);

  return (
    <>
      <h1>Detail Blog</h1>
      <h4>{post.blogCategory}</h4>
      <h1>{post.blogTitle}</h1>
      <p>Posted on {post.postedOn} by {post.author}</p>
      <p>{post.blogText}</p>
    </>
  );
};

export default PostDetail;
