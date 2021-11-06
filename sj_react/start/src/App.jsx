import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Cart from './pages/Cart';
import Input from './pages/Input';
import Product from './pages/Product';
import { createGlobalStyle } from 'styled-components';


const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<header>
				<Link to="/home">Home으로</Link>
				<Link to="/list">List로</Link>
				<Link to="/cart">Cart로</Link>
				<Link to="/input">Input</Link>
				<Link to="/product/all">Product</Link>
			</header>
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/list" component={List} />
				<Route path="/cart" component={Cart} />
				<Route path="/input" component={Input} />
				{/* <Route path="/product" component={Product} /> */}
				<Route path="/product/:category" render={(props) => (
					<Product history={props.history} match={props.match}  />
				)} />
				

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
		box-sizing: border-box;
	}
`;