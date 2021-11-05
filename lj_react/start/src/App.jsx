import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Cart from './pages/Cart';
import Input from './pages/Input';
import Product from './pages/Product';
import { createGlobalStyle } from 'styled-components';
import Send from './pages/Send';
import Get from './pages/Get';
import Address from './pages/Address';

// function App() {
// 	return (
// 		<h1>Hello, I'm App.jsx</h1>
// 	);
// }

// Arrow 함수
const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<header>
				{/* <Link to="/get">받는페이지</Link>
				<Link to="/send">보내는페이지</Link>
				<Link to="/home">Home으로</Link>
				<Link to="/list">List로</Link>
				<Link to="/cart">Cart로</Link>
				<Link to="/input">Input</Link> */}
				<Link to="/product">Product</Link>
			</header>
			<Switch>
				<Route path="/address" component={Address} />
				<Route path="/send" component={Send} />
				<Route path="/get/:name" component={Get} />
				<Route path="/home" component={Home} />
				<Route path="/list" component={List} />
				<Route path="/cart" component={Cart} />
				<Route path="/input" component={Input} />
				{/* <Route path="/product" component={Product} /> */}
				<Route path="/product/:category" render={(props) => (
					<Product test="123" history={props.history} match={props.match} />
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