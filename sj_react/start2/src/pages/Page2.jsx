import React, { useState, useReducer } from 'react';
import CounterReducer from '../reducers/CounterReducer';

const Page2 = () => {
  const [ qty, setQty ] = useState(0);
  const [ count, dispatch ] = useReducer(CounterReducer, 0 );
  
  const onChange = (ev) => {
    const {target: {value}} = ev; 
    setQty(value);
  };

  const minus = () => {
    dispatch({ type: 'minus'})
  };

  const custom = () => {
    dispatch({ type: 'CUSTOM_MINUS', value: Number(qty)});
  };

  return (
    <div>
      <h1>Page2 Component</h1>
      <h1>Count: {count} </h1>
      <input value={qty} onChange={onChange}/>
      <button onClick={minus}>감소 -1</button>
      <button onClick={custom}>custom</button>
    </div>
  );
};





export default Page2;