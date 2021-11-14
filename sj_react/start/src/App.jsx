import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Cart from './pages/Cart';
import Input from './pages/Input';
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
				<Link to="/home">Home으로</Link>
				<Link to="/list">List로</Link>
				<Link to="/cart">Cart로</Link>
				<Link to="/input">Input</Link>
				<Link to="/address">Address</Link>
				<Link to="/product/all">Product</Link>
				<Link to="/page1">Page1</Link>
				<Link to="/page2">Page2</Link>
			</header>
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/list" component={List} />
				<Route path="/cart" component={Cart} />
				<Route path="/input" component={Input} />
				<Route path="/address" component={Address} />
				<Route path="/product/:category" component={Product} />
				<Route path="/page1" component={Page1}/ >
				<Route path="/page2" component={Page2}/ >
				<Redirect to="/home"/>
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