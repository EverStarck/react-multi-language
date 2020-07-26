import React from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

import fashionSmall from "../assets/fashion-small.jpg";
import fashionBig from "../assets/fashion-big.jpg";
import Card from "./Card";

import cellphone from "../assets/cellphone.jpg";
import email from "../assets/email.jpg";
import location from "../assets/location.jpg";

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
          mainText={t('mainText.card1')}
          secondaryText={t('secondaryText.card1')}
        />
        <Card
          img={email}
          mainText={t('mainText.card2')}
          secondaryText={t('secondaryText.card2')}
        />
        <Card
          img={location}
          mainText={t('mainText.card3')}
          secondaryText={t('secondaryText.card3')}
        />
      </div>
      {/* <h1>{t("title")}</h1>
      <h4>{t("description.part1")}</h4>
      <h4>{t("description.part2")}</h4>
      <p>{t("how")}</p> */}
    </MainFrame>
  );
};

export default Main;
