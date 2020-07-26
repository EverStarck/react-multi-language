import React from "react";
import styled from "@emotion/styled";

const CardFrame = styled.div`
  /* flex: 0 1 300px; */
  flex: 1 1 250px;
  text-align: center;
  padding: 20px;
  height: 50%;
  /* border: 1px solid red; */
  /* background: lightpink; */
  @media only screen and (max-width: 375px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const Card = (props) => {
  return (
    <CardFrame>
      <img src={props.img} alt="" />
      <h1>{props.mainText}</h1>
      <div>{props.secondaryText}</div>
    </CardFrame>
  );
};

export default Card;
