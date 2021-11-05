import React from 'react';

const Send = ({ history }) => {
	const go = () => {
		history.push('/get/이준');
	}
	return (
		<div>
			<h1>Send</h1>
			<button onClick={go}>
				<h1>Get으로</h1>
			</button>
		</div>
	);
};

export default Send;
