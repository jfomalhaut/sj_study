import React, {useState, useReducer} from 'react';
import CounterReducer from '../reducers/CounterReducer';


const Page1 = () => {
  const [ qty, setQty ] = useState('');
  const [ count, dispatch ] = useReducer(CounterReducer, 0);


  const plus = () => {
    dispatch({ type: 'PLUS'});
  };

  const custom = () => { 
    dispatch({ type: 'PLUS_CUSTOM', value: Number(qty)});
  };

  return (
    <div>
      <h1>Page1 Component</h1>
      <h1>Count: {count}</h1>
      <input value={qty} onChange={(ev) => setQty(ev.target.value)} />
      <button onClick={plus}>증가 +1</button>
      <button onClick={custom}>custom</button>
    </div>
  );
};

export default Page1;