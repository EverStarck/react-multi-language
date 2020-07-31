import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import postsManager from "../post/postsManager.json";
import BackButton from "../components/BackButton";

// Animations
import {fadeInAnimation} from '../components/Animations';

const PostFrame = styled.main`
  margin: 50px 0 0 0;
  padding: 0 40px 10px 30px;
  animation: 1s ${fadeInAnimation};
  @media only screen and (min-width: 1024px) {
    padding: 0;
    margin-bottom: 40px;
  }
  h4 {
    text-align: center;
    color: #4f4f4f;
  }
`;

const PostDetail = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const slug = props.match.params.slug;
    const post = postsManager.data.find((post) => post.slug === slug);
    setPost(post);
  }, [post, props.match.params.slug]);

  return (
    <PostFrame>
      <BackButton/>
      <h4>{post.blogCategory}</h4>
      <h1>{post.blogTitle}</h1>
      <p>
        Posted on {post.postedOn} by {post.author}
      </p>
      <p>{post.blogText}</p>
    </PostFrame>
  );
};

export default PostDetail;
