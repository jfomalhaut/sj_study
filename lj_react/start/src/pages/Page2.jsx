import React, { useReducer } from 'react';
import CounterReducer from '../reducers/CounterReducer';

const Page2 = () => {
	const [count, dispatch] = useReducer(CounterReducer, 10);
	const decrease = () => {
		dispatch({ type: 'minus' });
	};

	return (
		<div>
			<h1>Page2 Component</h1>
			<h1>Count: {count}</h1>
			<button onClick={decrease}>감소</button>
		</div>
	);
};

export default Page2;
