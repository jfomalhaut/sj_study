import React, {useState, useEffect} from "react";

const field = {
  user: '',
  phone: '',
}

const Phonebook = () => {
  const [books, setBooks] = useState([]);
  const [info, setInfo] = useState(field);
  const { user, phone } = info;
  
  
  const onChangeHandeler = (ev) => {
    const { target: {value, name }} = ev;

    setInfo(
      {
        ...info,
        [name]: value
      }
    );
  };


  const check = () => {
    // 수정 => spread, map
    // 삭제 => filter
    // 추가 => spread, concat
    // const newArr = books.concat(info);
    // setBooks(newArr); // 1.바뀐다.

    // 입력한 내용 넣어주기.
    setBooks(
      [
        ...books,
        info
      ]
    );
    setInfo(field); // reset 
  };
  // 2. books가 바뀔 때마다 반응한다.
  useEffect( () => {
    console.log(books);
  },[books]);


  return (
    <div>
      <h1>Phonebook</h1>
      <input value={user} name="user" onChange={onChangeHandeler} placeholder="이름" />
      <input value={phone} name="phone" onChange={onChangeHandeler} placeholder="전화번호" />
      <button onClick={check}>입력</button>
      <ul>
        {books.map((item,index) => (
          <li key={index}> {item.user} {item.phone}</li>
        ))}
      </ul>
    </div>
  );
};


export default Phonebook;