import React from 'react';
import styled from 'styled-components';


const Item = ({item}) => {
	const { type, name, price } = item;
	const transType = (type) => {
		switch(type) {
			case 1: return '수산물';
			case 2: return '과일';
			case 3: return '야채';
			default:
		}
	}

	return (
		<ItemComponents className={ type === 1 ? 'blue' : type === 2 ? 'red' : 'green'}>
			<figure />
			<span>{transType(type)}</span>
			<h2>{name}</h2>
			<h3>{`${price}원`}</h3>
		</ItemComponents>
	);
};



export default Item;

const ItemComponents = styled.div`
	figure {
		height: 100px;
		background: #ddd;
	}
	&.blue {
		figure {
			background: dodgerblue;
		}
	}
	&.red {
		figure {
			background: tomato;
		}
	}
	&.green {
		figure {
			background: green;
		}
	}
`;