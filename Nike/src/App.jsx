import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Main from './pages/Main';
import { createGlobalStyle } from 'styled-components';
import Nav from './components/Nav';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <header>
        <Nav />
      </header>
      <Switch>
        <Route path="/main" component={Main} />
        <Redirect to="/main" />
      </Switch>
    </BrowserRouter>


  );
};


export default App;

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;