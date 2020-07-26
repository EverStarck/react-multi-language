import React from "react";
import styled from '@emotion/styled';
import { useTranslation} from 'react-i18next';


const MainFrame = styled.main`
  margin: 20px 0;
  background: coral;
`;


const Main = () => {
    const { t } = useTranslation();
  return (
    <MainFrame>
      <h1>{t("title")}</h1>
      <h4>{t("description.part1")}</h4>
      <h4>{t("description.part2")}</h4>
      <p>{t("how")}</p>
    </MainFrame>
  );
};

export default Main;
