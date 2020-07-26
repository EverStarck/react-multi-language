import React from "react";
import styled from "@emotion/styled";
import logo from "../assets/pull-and-bear-logo.png";
import Switcher from "./Switcher";

const HeaderFrame = styled.nav`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  /* background: aliceblue; */

  .links {
    /* width: 15%; */
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* background: coral; */
    a {
      line-height: 1.5;
      color: #000;
      margin-right: 10px;
      text-decoration: none;
      border-bottom: 2px solid transparent;
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
  return (
    <HeaderFrame>
      <div className="links">
        <a href="#!">Home</a>
        <a href="#!">Blog</a>
      </div>
      <div className="logo">
        <img src={logo} width="150px" height="70px" alt="" />
      </div>
      <Switcher />
    </HeaderFrame>
  );
};

export default Header;
