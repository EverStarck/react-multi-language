import React from "react";
import styled from "@emotion/styled";

const FooterFrame = styled.footer`
  width: 100%;
  height: 8vh;
  background: aliceblue;

    .links {
        width: 10%;
        height: 100%;
        background: green;
    }

`;

const Footer = () => {
  return (
    <FooterFrame>
      <div className="links">
        <a href="#!">Home</a>
        <a href="#!">Blog</a>
      </div>
    </FooterFrame>
  );
};

export default Footer;
