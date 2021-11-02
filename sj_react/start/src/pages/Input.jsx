import React, {useState} from 'react';

const Input = () => {
  const [keyword, setKeyword] = useState('');

  const onChangeHandler = (ev) => {
    // const value = ev.target.value;
    // const name = ev.target.name;
    // const hello = ev.target.hello;
    const { target : {value} } = ev;
    setKeyword(value);
  };

  return (
    <div>
      <h1>Input Component</h1>
      <input value={keyword} onChange={onChangeHandler} />
    </div>
  )
}







export default Input;