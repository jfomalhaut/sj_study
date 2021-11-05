import React from 'react';

const Get = ({ match }) => {
	return (
		<div>
			<h1>Get: {match.params.name}</h1>
		</div>
	);
};

export default Get;
