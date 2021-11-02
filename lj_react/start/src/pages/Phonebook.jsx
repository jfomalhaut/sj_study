import React, { useEffect, useState } from 'react';

const field = {
	user: '',
	phone: '',
};

const Phonebook = () => {
	const [books, setBooks] = useState([]);
	const [info, setInfo] = useState(field);
	const { user, phone } = info;

	const onChangeHandler = (ev) => {
		const { target: { value, name } } = ev;

		setInfo({
			...info,
			[name]: value
		});
	};
	const check = () => {
		// 수정 => spread, map
		// 삭제 => filter
		// 추가 => spread, concat
		// const newArr = books.concat(info);
		// setBooks(newArr); // 1.바뀐다.

		// 입력한 내용을 넣어주기.
		setBooks([
			...books,
			info
		]);
		// console.log(books); // 위의 setBooks는 여기서 바로 확인할 수 없다.
		setInfo(field); // reset
	};

	// 2.books가 바뀔 때마다 반응한다.
	useEffect(() => {
		console.log(books);
		// const html = books.map(item => (
		// 	`
		// 		<div>
		// 			<h1>${item.user}</h1>
		// 			<h1>${item.phone}</h1>
		// 		</div>
		// 	`
		// ));
		// // 배열 안의 오브젝트 => 문자열로 변경
		// console.log(html);
	}, [books]);

	return (
		<div>
			<h1>Phonebook</h1>
			<input value={user} name="user" onChange={onChangeHandler} placeholder="이름" />
			<input value={phone} name="phone" onChange={onChangeHandler} placeholder="전화번호" />
			<button onClick={check}>입력</button>
			<ul>
				{books.map((item, index) => (
					<li key={index}>{item.user} ({item.phone})</li>
				))}
			</ul>
		</div>
	);
};

export default Phonebook;


// 수학 접근(논리) 왜? 아 이해했다 => 모르면 스트레스 심함 => 모르면 하기 싫어짐 => 롱런 힘듬 => 이 스타일이 잠재력
// 언어 접근 => 아원래 저렇게 쓰는거구나.(의문이 없는 상태) => 몰라도 사용 가능 => 저
// Q: 질문해야 할 내용, W: 고민해볼 여지가 있다. 좀 더 연구가 필요하다.