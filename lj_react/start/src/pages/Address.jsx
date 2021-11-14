import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'devU01TX0FVVEgyMDIxMTEwNDEyMDU1NDExMTgzOTU=';
const JUSO_URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';

const Address = () => {
	const [list, setList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [keyword, setKeyword] = useState(''); // 입력용으로만 사용.
	const [keyword2, setKeyword2] = useState(''); // 네트워크 전송용

	const onChangeHandler = (ev) => {
		const { target: { value } } = ev;
		setKeyword(value);
	};

	const onSubmit = async (ev) => {
		ev.preventDefault();
		setKeyword2(keyword);
		// search();
	};
	
	const search = async () => {
		const { data, data: { results:{ common, juso } } } = await axios.get(`${JUSO_URL}?confmKey=${API_KEY}&currentPage=${currentPage}&countPerPage=10&resultType=json&keyword=${keyword2}`);
		setList(juso);
	};

	const next = () => {
		setCurrentPage(currentPage + 1);
	};

	useEffect(() => {
		if (keyword2 !== '') {
			if (currentPage === 1) {
				console.log('search 함수 실행');
				search();
			} else {
				console.log('currentPage를 1로 변경');
				setCurrentPage(1); // currentPage를 1로 바꿔주려는데, 이미 1 페이지다.
			}
		}
	}, [keyword2]);

	// currentPage가 바뀔 때에만 동작을 한다.
	useEffect(() => {
		console.log('동작');
		if (keyword !== '') {
			search();
		}
	}, [currentPage]);

	return (
		<div style={{ padding: '50px'}}>
			<h1>주소 검색</h1>
			<h1>현재페이지: {currentPage}</h1>
			<h1>입력한 키워드: {keyword}</h1>
			<h1>전송용 키워드: {keyword2}</h1>
			<form onSubmit={onSubmit}>
				<input value={keyword} onChange={onChangeHandler} />
				<button>검색</button>
			</form>
			<ul>
				{list.map(item => (
					<li>{item.roadAddrPart1}</li>
				))}
			</ul>
			<button>이전</button>
			<button onClick={next}>다음</button>
		</div>
	);
};

export default Address;