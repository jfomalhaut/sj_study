import React, {useState} from 'react';

const Input = () => {
  const [keyword, setKeyword] = useState('');
  const onChangeHandler = (ev) => {
    const { target : {value} } = ev;
    setKeyword(value);
  };



  return (
    <div>
      <h1>Input Component</h1>
      <input value={keyword} name="user" onChange={onChangeHandler} />
    </div>
  )

  


};




export default Input;
