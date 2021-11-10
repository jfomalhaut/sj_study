import axios from 'axios';
import React, {useState, useEffect} from 'react';
const API_KEY = 'devU01TX0FVVEgyMDIxMTEwNDEyMDU1NDExMTgzOTU=';
const JUSO_URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';


const Address = () => {
  const [ list, setList ] = useState([]);
  const [ currentPage, setcurrentPage ] = useState(1);
  const [ keyword, setKeyword ] = useState(''); // 입력용
  const [ keyword2, setKeyword2 ] = useState(''); // 네트워크 전송용
  
  const onChangeHandler = (ev) => {
    const { target: {value} } = ev;
    setKeyword(value);
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    setKeyword2(keyword);
    // search();
  };

  const search = async () => {
    const {data: {results: {common, juso}}} = await axios.get(`${JUSO_URL}?confmKey=${API_KEY}&currentPage=${currentPage}&countPerPage=10&resultType=json&keyword=${keyword2}`);
    setList(juso);
  }

  const next = () => {
    setcurrentPage(currentPage + 1);
  }

  useEffect(() => {
    if (keyword2 !== '') {
      if (currentPage === 1) {
        search();
      } else {
        setcurrentPage(1);
      }
    }
  }, [keyword2])

  useEffect(() => {
    if (keyword !== '') {
      search();
    }
  }, [currentPage])



  return (
    <div>
      <h1>주소 검색</h1>
      <h1>현재페이지: {currentPage}</h1>
      <h1>입력한 키워드: {keyword}</h1>
      <h1>전송용 키워드: {keyword2}</h1>
      <form onSubmit={onSubmit}>
        <input value={keyword} onChange={onChangeHandler} />
        <button>검색</button>
      </form>
      <ul>
      {
        list.map(item => (
          <li>{item.roadAddrPart1}</li>
        ))
      }
      </ul>
      <button>이전</button>
      <button onClick={next}>다음</button>

    </div>
  );
};


export default Address;