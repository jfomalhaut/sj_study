import React, {useState, useEffect} from 'react';

const field = {
  user: '',
  phone: '',
}


const Phonebook = () => {
  const [ info, setInfo ] = useState(field);
  const { user, phone } = info;
  const [ books, setBooks ] = useState([]);


  const onChange = (ev) => {
    const { target: { name, value } } = ev;  
    setInfo(
      {
        ...info,
        [name] : value,
      }
    )

  }

  const check = () => {
    setBooks(
      [
        ...books,
        info
      ]
    )
    setInfo(field);
  }
  

  useEffect(() => {
    console.log(books)
  }, [books])


  return (
    <div>
      <h1>Phonebook</h1>
      <input value={user} name="user" onChange={onChange} placeholder="이름"></input>
      <input value={phone} name="phone" onChange={onChange} placeholder="전화번호"></input>
      <button onClick={check}>버튼</button>
      <ul>
        {
          books.map((item, index) => (
            <li key={index}>{item.user} ({item.phone})</li>
          ))
        }
      </ul>

    </div>
  );
};



export default Phonebook