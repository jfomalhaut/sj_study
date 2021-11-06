import React from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Cart from './pages/Cart';
import Product from './pages/Product';
import { createGlobalStyle } from 'styled-components';
import Address from './pages/Address';


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
      </header>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/cart" component={Cart} />
        {/* <Route path="/product" component={Product} /> */}
        <Route path="/product/:category" render={(props) => (
          <Product history={props.history} match={props.match} / >
        )} 
          
        />
        <Route path="/address" component={Address} />
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
