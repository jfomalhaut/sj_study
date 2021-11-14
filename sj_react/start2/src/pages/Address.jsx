import axios from 'axios';
import React, {useState, useEffect} from 'react';
const API_KEY = 'devU01TX0FVVEgyMDIxMTEwNDEyMDU1NDExMTgzOTU=';
const JUSO_URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';


const Address = () => {
  const [ list, setList ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ keyword, setKeyword ] = useState('');
  
  const onChange = (ev) => {
    setKeyword(ev.target.value);
  }

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const {data: {results: {common, juso}}} = await axios.get(`${JUSO_URL}?confmKey=${API_KEY}&currentPage=${currentPage}&countPerPage=10&resultType=json&keyword=${keyword}`);
    setList(juso); 
  }

  const next = () => {
    setCurrentPage( currentPage + 1 );
  }  


  return (
    <div>
      <h1>주소찾기</h1>
      <h1>현재페이지: {currentPage}</h1>
      <form onSubmit={onSubmit}>
        <input value={keyword} onChange={onChange} />
        <button>검색</button>
      </form>
      <ul>
        {
          list.map((item, index) => (
            <li key={index}>{item.roadAddrPart1}</li>
          ))
        }
      </ul>
      <button>이전</button>
      <button onClick={next}
      >다음</button>
    </div>
  );




};


export default Address;