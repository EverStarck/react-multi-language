import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { useTranslation } from "react-i18next";

import fashionSmall from "../assets/fashion-small.jpg";
import fashionBig from "../assets/fashion-big.jpg";
import Card from "./Card";

import cellphone from "../assets/cellphone.jpg";
import email from "../assets/email.jpg";
import location from "../assets/location.jpg";

// Animations
import { pulse } from "react-animations";
import { zoomInLeft } from "react-animations";
import { zoomInUp } from "react-animations";
import { zoomInRight } from "react-animations";

const pulseAnimation = keyframes`${pulse}`;
const zoomInLeftAnimation = keyframes`${zoomInLeft}`;
const zoomInUpAnimation = keyframes`${zoomInUp}`;
const zoomInRightAnimation = keyframes`${zoomInRight}`;

const MainFrame = styled.main`
  box-sizing: border-box;
  margin: 20px 0;
  /* background: aliceblue; */
  @media only screen and (max-width: 375px) {
    .img {
      img {
        width: 100%;
        height: 300px;
      }
    }
  }
  .img {
    width: 100%;
    height: 50%;
    animation: 1s ${pulseAnimation};
    /* background: red; */
  }
  .info {
    width: 100%;
    height: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    /* background: green; */
  }
`;

const Main = () => {
  const { t } = useTranslation();
  return (
    <MainFrame>
      <div className="img">
        <img
          src={fashionBig}
          alt=""
          width="100%"
          height="100%"
          srcSet={`${fashionSmall} 300w, ${fashionBig} 768w`}
        />
      </div>
      <div className="info">
        <Card
          img={cellphone}
          mainText={t("mainText.card1")}
          secondaryText={t("secondaryText.card1")}
          animationEffect={zoomInLeftAnimation}
        />
        <Card
          img={email}
          mainText={t("mainText.card2")}
          secondaryText={t("secondaryText.card2")}
          animationEffect={zoomInUpAnimation}
        />
        <Card
          img={location}
          mainText={t("mainText.card3")}
          secondaryText={t("secondaryText.card3")}
          animationEffect={zoomInRightAnimation}
        />
      </div>
    </MainFrame>
  );
};

export default Main;
