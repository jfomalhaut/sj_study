import React from 'react';
import styled from 'styled-components';

const Nav2 = () => {
	return (
		<NavComponent>
			<nav>
				<span>Hello1</span>
				<span>Hello2</span>
				<span>Hello3</span>
			</nav>
		</NavComponent>
	);
};

export default Nav2;

// 이런식으로 하나만 만들어놓고 아래에다가 계속 써내려가면 사용하기가 덜 어려워요.
const NavComponent = styled.div`
	nav {
		display: flex;
		span {
			height: 200px;
			width: 200px;
		}
	}
`;