import React from 'react';

const List = ({ history, math, location }) => {
	const goHome = () => {
		history.push('/list');
	};
	return (
		<div>
			<h1>List Component</h1>
			<button onClick={goHome}>Home으로 이동</button>
		</div>
	);
};

export default List;