import React, { useReducer, useState } from 'react';
import CounterReducer from '../reducers/CounterReducer';

const Page1 = () => {
	const [qty, setQty] = useState(0);
	const [count, dispatch] = useReducer(CounterReducer, 0);

	const plus = () => {
		dispatch({ type: 'plus' });
	};

	const custom = () => {
		dispatch({ type: 'CUSTOM_PLUS', value: Number(qty) });
	};

	return (
		<div style={{ padding: 20 }}>
			<h1>Page1 Component</h1>
			<h1>count: {count}</h1>
			<input value={qty} onChange={(ev) => setQty(ev.target.value)} />
			<button onClick={plus}>증가 +1</button>
			<button onClick={custom}>custom</button>
		</div>
	);
};

export default Page1;
