import React, { useState } from 'react';

const field = {
	user: '',
	phone: '',
};

const Phonebook = () => {
	const [info, setInfo] = useState(field);
	const { user, phone } = info;

	const onChangeHandler = (ev) => {
		const { target: { value, name } } = ev;
		// info = {
		// 	user: '123123',
		// 	phone: '',
		// }
		setInfo({
			...info,
			[name]: value
		});
	};
	const check = () => {
		console.log(info);
	};
	return (
		<div>
			<h1>Phonebook</h1>
			<input value={user} name="user" onChange={onChangeHandler} placeholder="이름" />
			<input value={phone} name="phone" onChange={onChangeHandler} placeholder="전화번호" />
			<button onClick={check}>입력</button>
		</div>
	);
};

export default Phonebook;