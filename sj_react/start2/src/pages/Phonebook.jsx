import React, {useState, useEffect} from 'react';

const field = {
  user: '',
  phone: '',
}

const Phonebook = () => {
  const [ books, setBooks ] = useState([]);
  const [ info, setInfo ] = useState(field);
  const { user, phone } = info;


  const onChangeHandler = (ev) => {
    const { target: { value, name } } = ev;
    setInfo(
      {
        ...info,
        [name] : value
      }
    );
  };

  const check = () => {
    setBooks(
      [
        ...books,
        info
      ]
    )
    setInfo(field);
  };

  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <div>
      <h1>Phonebook</h1>
      <input value={user} name="user" onChange={onChangeHandler} placeholder="이름" />
      <input value={phone} name="phone" onChange={onChangeHandler}placeholder="전화번호" />
      <button onClick={check}>입력</button>      
      <ul>
        {
          books.map((item, index) => (
            <li key={index}>{item.user} ({item.phone})</li>
          ))
        } 
        {/* Q. ul 다음이 왜 {}인지 */}
      </ul>
    </div>
  )
}; 





 



export default Phonebook;