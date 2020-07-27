import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const P = styled.p`
  font-size: 1.2rem;
`;

const BackButton = () => {
  const LinkStyle = {
    textDecoration: "none",
  };

  return (
    <Link style={LinkStyle} to="/blog">
      <P>
        &larr;<span></span> Back
      </P>
    </Link>
  );
};

export default BackButton;
