import React,{useState, useEffect} from 'react';
import Item from '../components/Item';
import Items from '../jsons/items.json';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// 상품을 불러와서 출력해주고,
// 새로운 컨퍼넌트로 뺀다.
// 스타일드 컴퍼넌트를 적용한다.

// 폰북도 구현해본다.
const Product = ({ history, match }) => {
	// const category = match.params;
	const { params: {category}} = match;
	const [list, setList] = useState([]);

	const transType = (cate) => {
		switch(cate) {
			case 'fish': return 1;
			case 'fruit': return 2;
			case 'vegetable': return 3;
			default: return 0;
		}
	}



	useEffect(()=> {
		if (category === 'all') {
			setList(Items);
			return;
		}
		const type = transType(category);
		const result = Items.filter(item => item.type === type);
		setList(result);
	},[category]);


	return (
		<ProductComponent>
			<h1>Product</h1>
			<nav>
				<Link to="/product/all">전체</Link>
				<Link to="/product/fish">수산물</Link>
				<Link to="/product/fruit">과일</Link>
				<Link to="/product/vegetable">야채</Link>
			</nav>
			<ul>
				{list.map(item => (
					<Item key={item.id} item={item} />
				))}
			</ul>
		</ProductComponent>
	);
};

// Item(key, item);

export default Product;

const ProductComponent = styled.div`
	nav {
		display: flex;
		justify-content: center;
		a {
			font-size: 20px;
			margin: 0 10px;
			font-weight: 500;
		}
	}
	ul {
		display: grid;
    grid-template-columns: repeat(4, 1fr); 
		width: 1000px;
		margin: 50px auto;
		
	}

`;