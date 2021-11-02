import React from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Cart from './pages/Cart';



const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to='/home'>Home으로</Link>
        <Link to='/list'>list로</Link>
        <Link to='/cart'>cart로</Link>
      </header>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/list" component={List} />
      <Route path="/cart" component={Cart} />
      <Redirect path="/home" />
    </Switch>
    </BrowserRouter>
  )


};

export default App;