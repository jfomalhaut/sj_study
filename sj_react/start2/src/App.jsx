import React from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Cart from './pages/Cart';
import Product from './pages/Product';
import { createGlobalStyle } from 'styled-components';
import Address from './pages/Address';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';


const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <header>
        <Link to='/home'>Home으로</Link>
        <Link to='/list'>list로</Link>
        <Link to='/cart'>cart로</Link>
        <Link to='/product/all'>Product</Link>
        <Link to='/address'>Address</Link>
        <Link to='/page1'>Page1</Link>
        <Link to='/page2'>Page2</Link>
      </header>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/cart" component={Cart} />
        <Route path="/product" component={Product} />
        <Route path="/address" component={Address} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />


        <Redirect to="/home" /> 
      </Switch>
    </BrowserRouter>
  );
};

export default App;

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-siziong: border-box;
  }
`;
