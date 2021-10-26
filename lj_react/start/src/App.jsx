import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';

// function App() {
// 	return (
// 		<h1>Hello, I'm App.jsx</h1>
// 	);
// }

// Arrow 함수
const App = () => {
	return (
		<BrowserRouter>
			<header>
				<Link to="/home">Home으로</Link>
				<Link to="/list">List로</Link>
			</header>
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/list" component={List} />
				<Redirect to="/home" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
