 
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'devU01TX0FVVEgyMDIxMTEwNDEyMDU1NDExMTgzOTU=';
const JUSO_URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';

const Address = () => {
	const [ keyword, setKeyword ] = useState(''); // 입력용으로만 사용.
	const [ keyword2, setKeyword2 ] = useState(''); // 입력용으로만 사용.
  const [ list, setList ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);

	const onSubmit = (ev) => {
		ev.preventDefault();
		setKeyword2(keyword);
	}
	

	const search = async () => {
		const { data: { results:{ common, juso } } } = await axios.get(`${JUSO_URL}?confmKey=${API_KEY}&currentPage=${currentPage}&countPerPage=10&resultType=json&keyword=${keyword2}`);
		setList(juso);
	};
	
	const next = () => {
		setCurrentPage( currentPage + 1);
	};

	useEffect(() => {
		if( keyword !== '') {
			search();
		}
	}, [currentPage]);

	useEffect(() => {
		if ( keyword !== '') {
			search();
		}
	}, [keyword2])



	
	return (
		<div style={{ padding: '50px'}}>
			<h1>주소 검색</h1>
			<h1>입력한 키워드: {keyword}</h1>
			<h1>전송된 키워드: {keyword2}</h1>
			<h1>현재 페이지: {currentPage} </h1>
			<form onSubmit={onSubmit}>
				<input value={keyword} onChange={(ev) => setKeyword(ev.target.value)} />
				<button>검색</button>
			</form>
			<ul>
				{list.map((item, index) => (
					<li key={index}>{item.roadAddrPart1}</li>
				))}
			</ul>
			<button>이전</button>
			<button onClick={next}>다음</button>
		</div>
	);
};

export default Address;