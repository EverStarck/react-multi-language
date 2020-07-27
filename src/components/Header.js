import React from "react";
import styled from "@emotion/styled";
import logo from "../assets/pull-and-bear-logo.png";
import Switcher from "./Switcher";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeaderFrame = styled.nav`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  /* background: aliceblue; */
  @media only screen and (max-width: 390px) {
    .logo {
      img {
        width: 80%;
        height: 80%;
      }
    }
  }
  .links {
    /* width: 15%; */
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* background: coral; */
    p {
      line-height: 1.5;
      color: #000;
      margin-right: 10px;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      &:hover {
        border-bottom: 2px solid #000;
      }
    }
  }

  .logo {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* text-align: center;
    position: absolute;
    left: 50%; */
  }
`;

const Header = () => {
  const { t } = useTranslation();

  const NoDecoration = {
    textDecoration: 'none'
  };

  return (
    <HeaderFrame>
      <div className="links">
        <Link style={{textDecoration: 'none'}} to="/">
          <p>{t("home")}</p>
        </Link>
        <Link style={NoDecoration} to="/blog">
          <p>Blog</p>
        </Link>
      </div>
      <div className="logo">
        <img src={logo} width="150px" height="70px" alt="" />
      </div>
      <Switcher />
    </HeaderFrame>
  );
};

export default Header;
