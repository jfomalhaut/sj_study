import React from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect}from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Cart from './pages/Cart';
import Input from './pages/Input';


const App = () => {
  return (
      <BrowserRouter>
        <header>
          <Link to="/home">Home으로</Link>
          <Link to="/list">List로</Link>
          <Link to="/cart">Cart로</Link>
          <Link to="/input">Input으로</Link>
        </header>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/cart" component={Cart} />
          <Route path="/input" component={Input} />
          <Redirect to="/home"/>
        </Switch>
      </BrowserRouter>

  );
};






export default App;