import React from "react";
import { useTranslation} from 'react-i18next';

const Switcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('es')}>Español</button>
      </div>
    </>
  );
};

export default Switcher;
