import React from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const FooterFrame = styled.footer`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: aliceblue; */
`;

const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterFrame>
      <p>{t('footer')}</p>
    </FooterFrame>
  );
};

export default Footer;
