import React, { useState } from 'react';

const Home = () => {
<<<<<<< Updated upstream
	// count와 setCount는 쌍으로 사용이 된다.
	// count를 변경할 수 있는 유일한 방법은 setCount를 쓰는 것이다.
	const [count, setCount] = useState(0);
	const plus = () => {
		setCount(count + 1);
	};
	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={plus}>plus</button>
=======
	const count = 10;
	return (
		<div>
			<h1>Home Component</h1>
			<h1> count: {count} </h1>
>>>>>>> Stashed changes
		</div>
	);
};






export default Home;