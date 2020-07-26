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

// // use hoc for class based components
// class LegacyWelcomeClass extends Component {
//   render() {
//     const { t } = this.props;
//     return <h2>{t('title')}</h2>;
//   }
// }
// const Welcome = withTranslation()(LegacyWelcomeClass);

// // Component using the Trans component
// function MyComponent() {
//   return (
//     <Trans i18nKey="description.part1">
//       To get started, edit <code>src/App.js</code> and save to reload.
//     </Trans>
//   );
// }

// page uses the hook
// function Page() {
//   const { t, i18n } = useTranslation();

//   const changeLanguage = lng => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div className="App">
//       <div className="App-header">
//         <Welcome />
//         <button onClick={() => changeLanguage('en')}>English</button>
//         <button onClick={() => changeLanguage('es')}>Español</button>
//       </div>
//       <div className="App-intro">
//         <MyComponent />
//       </div>
//       <div>{t('description.part2')}</div>
//     </div>
//   );
// }



// loading component for suspense fallback
// const Loader = () => (
//   <div className="App">
//     <img  className="App-logo" alt="logo" />
//     <div>loading...</div>
//   </div>
// );

// // here app catches the suspense from page in case translations are not yet loaded
// export default function App() {
//   return (
//     <Suspense fallback={<Loader />}>
//       <Page />
//     </Suspense>
//   );
// }
