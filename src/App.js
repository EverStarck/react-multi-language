import React from 'react';
import { useTranslation} from 'react-i18next';


const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('es')}>Español</button>
      </div>
      <div>
        <h1>{t('title')}</h1>
        <h4>{t('description.part1')}</h4>
        <h4>{t('description.part2')}</h4>
      </div>
    </>
  );
}

export default App;