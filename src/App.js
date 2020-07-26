import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


const MainContainer = styled.div`
  font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto 1fr auto;
    /* background: aliceblue; */
  }
`;

const App = () => {
  return (
    <MainContainer>
      <Header/>
      <Main/>
      <Footer/>
    </MainContainer>
  );
}

export default App;