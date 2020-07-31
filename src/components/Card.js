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
  animation: .8s ${(props) => props.animationEffect};
  @media only screen and (max-width: 375px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const Card = ({ img, mainText, secondaryText, animationEffect }) => {
  return (
    <CardFrame
      img={img}
      mainText={mainText}
      secondaryText={secondaryText}
      animationEffect={animationEffect}
    >
      <img src={img} alt="" />
      <h1>{mainText}</h1>
      <div>{secondaryText}</div>
    </CardFrame>
  );
};

export default Card;
