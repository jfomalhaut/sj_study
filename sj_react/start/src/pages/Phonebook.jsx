import React, {useState} from "react";


const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeName = (ev) => {
     const { target : {value} } = ev;
     setName(value);
  }

  const onChangeNumber = (ev) => {
    const { target : {value} } = ev;
    setNumber(value);
  }


  return (
    <div>
      <h1>Phonebook</h1>
      <input placeholder="이름" value={name} onChange={onChangeName}/>
      <input placeholder="전화번호" value={number} onChange={onChangeNumber}/>
      <button>입력</button>
    </div>
  );
};


export default Phonebook;