import React from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const ButtonFrame = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  @media only screen and (max-width: 375px) {
    button {
      padding: 0;
    }
  }
  button {
    background-color: transparent;
    color: #000;
    border: none;
    padding-bottom: 2px;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    &:first-child {
      margin-right: 10px;
    }
    &:hover {
      border-bottom: 2px solid #000;
    }
  }
`;

const Switcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <ButtonFrame>
        <button onClick={() => changeLanguage("en")}>{t('language.english')}</button>
        <button onClick={() => changeLanguage("es")}>{t('language.spanish')}</button>
      </ButtonFrame>
    </>
  );
};

export default Switcher;
