import React, {useState} from 'react';

const field = {
  user: '',
  phone: '',
}


const Phonebook = () => {
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


  return (
    <div>
      <h1>Phonebook</h1>
      <input value={user} name="user" onChange={onChangeHandler} placeholder="이름" />
      <input value={phone} name="phone" onChange={onChangeHandler}placeholder="전화번호" />
      <button>입력</button>
    </div>
  )
}; 





 



export default Phonebook;