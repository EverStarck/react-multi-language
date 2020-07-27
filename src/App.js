import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Blog from "./pages/Blog";
import PostDetail from "./pages/PostDetail";

const MainContainer = styled.div`
  font-family: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  box-sizing: border-box;
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto minmax(500px, 1fr) auto;
    /* background: aliceblue; */
  }
`;

const App = () => {
  return (
    <Router>
      <MainContainer>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" component={Blog} />
          <Route path="/post/:slug" component={PostDetail} />
        </Switch>
        {/* <Main /> */}
        <Footer />
      </MainContainer>
    </Router>
  );
};

export default App;
