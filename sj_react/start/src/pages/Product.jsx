import React from 'react';
import Item from '../components/Item';
import Items from '../jsons/items.json';

// 상품을 불러와서 출력해주고,
// 새로운 컨퍼넌트로 뺀다.
// 스타일드 컴퍼넌트를 적용한다.

// 폰북도 구현해본다.
const Product = () => {
	return (
		<div>
			<h1>Product</h1>
			<ul>
				{Items.map(item => (
					<Item key={item.id} item={item} />
				))}
			</ul>
		</div>
	);
};

// Item(key, item);

export default Product;