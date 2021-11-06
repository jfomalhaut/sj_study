import React, {useState} from 'react';
import axios from 'axios';
const API_KEY = 'devU01TX0FVVEgyMDIxMTEwNDEyMDU1NDExMTgzOTU';
const JUSO_URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';


const Address = () => {
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState('');

  const onChangeHandler = (ev) => {
    const { target: {value} } = ev;
    setKeyword(value);
  }

  // const onSubmit = async (ev) => {
  //   ev.preventDefault();
  //   const data = await axios.get(`${JUSO_URL}?comfmKey=${API_KEY}&keyword=${keyword}`);
  //   const juso = data.juso;
  //   setList(juso);

  // };

  return (
    <div>
      <h1>주소검색</h1>
      <form>
        <input value={keyword} onChange={onChangeHandler}></input>
        <button>검색</button>
      </form>
      {/* <ul>
        {
          list.map(item => (
            <li>{item.roadAddrPart1}</li>
          ))
        }
      </ul> */}
    </div>
  )
}


export default Address;