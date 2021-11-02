import React from 'react';
import styled from 'styled-components';

const Item = ({ item }) => {
	const { type, name, price } = item;
	// 1. 이해 => 2. 사용 => 3. 강의 찾기 => 4. 선생님 찾기
	// 1. 사용(기본) => 2. 이해
	// 
	// 진도 X 

	const transType = (type) => {
		switch (type) {
			case 1: return '수산물';
			case 2: return '과일';
			case 3: return '야채';
			default:
		}
	};

	return (
		<ItemsComponent>
			<figure />
			<article>
				<span>{transType(type)}</span>
				<h2>{name}</h2>
				<h3>{`${price}원`}</h3>
			</article>
		</ItemsComponent>
	);
};

export default Item;

const ItemsComponent = styled.li`
	list-style: none;
	figure {
		height: 100px;
		background: #ddd;
	}
`;