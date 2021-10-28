import React, { useState, useEffect } from 'react';

const Cart = () => {
	const [price, setPrice] = useState(0);
	const [count, setCount] = useState(0); // 수량
	const [fee, setFee] = useState(2500); // 배송료
	// const price = 2000; // 상품가격
	const limit = 30000;
	const plus = () => {
		setCount(count + 1);
	};
	const minus = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};
	// useEffect는 감시를 붙일 때 사용한다.
	// 대괄호 안의 값이 바뀔 때마다 작동하는 메소드이다.
	// 대괄호 안이 비어있으면, 처음 시작할 때 동작하는 메소드가 된다.
	// 즉 init이 된다.

	useEffect(() => {
		// 상품 총합이 30,000원이 넘으면 fee가 0원이 된다.
		// 상품 총합이 30,000원 미만이면 fee는 다시 2500원이 된다.
		if (price * count >= limit) {
			setFee(0);
		} else {
			setFee(2500);
		}
	}, [count]);

	// init (componentDidMount)
	useEffect(() => {
		// 보통 서버로부터 데이터를 받아올 때 많이 사용된다.
		setPrice(3000);
	}, []);

	return (
		<div>
			<section>
				<h1>상품가격 : {price}원</h1>
				<h1>배송료 : {fee}원</h1>
				<h1>수량 : {count}개</h1>
				<h1>총합 : {price * count + fee}원</h1>
				<button onClick={plus}>수량증가</button>
				<button onClick={minus}>수량감소</button>
			</section>
		</div>
	);
};

export default Cart;