import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'devU01TX0FVVEgyMDIxMTEwNDEyMDU1NDExMTgzOTU=';
const JUSO_URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';

const Address = () => {
	const [list, setList] = useState([]);
	const [keyword, setKeyword] = useState('');

	const onChangeHandler = (ev) => {
		const { target: { value } } = ev;
		setKeyword(value);
	};

	const onSubmit = async (ev) => {
		ev.preventDefault();
		const { data, data: { results:{ common, juso } } } = await axios.get(`${JUSO_URL}?confmKey=${API_KEY}&currentPage=1&countPerPage=10&resultType=json&keyword=${keyword}`);
		setList(juso);
		console.log(data);
	};

	return (
		<div>
			<h1>주소 검색</h1>
			<form onSubmit={onSubmit}>
				<input value={keyword} onChange={onChangeHandler} />
				<button>검색</button>
			</form>
			<ul>
				{list.map(item => (
					<li>{item.roadAddrPart1}</li>
				))}
			</ul>
		</div>
	);
};

export default Address;
