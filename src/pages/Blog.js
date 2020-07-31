import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import postsManager from "../post/postsManager.json";

// Animations
import {fadeInAnimation, fadeInDownAnimation} from '../components/Animations';


const BlogFrame = styled.main`
  h1 {
    text-align: center;
    margin-bottom: 50px;
    animation: .5s ${fadeInDownAnimation};
  }
  .posts-frame {
    padding: 0 40px 10px 30px;
    animation: 1.5s ${fadeInAnimation};
    @media only screen and (min-width: 1024px) {
      padding: 0;
      margin-bottom: 40px;
    }
    h3 {
      margin-bottom: 5px;
    }
    p {
      margin-top: 10px;
    }
  }
`;

const Blog = () => {
  const { t } = useTranslation();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = postsManager.data;
    setPosts(posts);
  }, []);

  return (
    <BlogFrame>
      <h1>{t("blog")}</h1>
      {posts.map((post) => (
        <div className="posts-frame" key={post.id}>
          <Link to={`/post/${post.slug}`}>
            <h3>{post.blogTitle}</h3>
          </Link>
          <small>{post.postedOn}</small>
          <p>{post.blogTextMin}</p>
        </div>
      ))}
    </BlogFrame>
  );
};

export default Blog;
