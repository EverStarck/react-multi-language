import React from 'react';
import { useTranslation} from 'react-i18next';
import Switcher from './components/Switcher';


const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <Switcher/>
      <div>
        <h1>{t('title')}</h1>
        <h4>{t('description.part1')}</h4>
        <h4>{t('description.part2')}</h4>
      </div>
      <p>{t('how')}</p>
    </>
  );
}

export default App;