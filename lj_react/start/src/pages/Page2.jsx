import React, {useState} from 'react';

const Page2 = () => {
	const [ qty, setQty ] = useState(0);
	
	const onChange = (ev) => {
		setQty(ev.target.value);
	}
	
	return (
		<div>
			<h1>Page2 Component</h1>
			<input value={qty} onChange={onChange}  />
			<button></button>
		</div>
	);

}







export default Page2;

