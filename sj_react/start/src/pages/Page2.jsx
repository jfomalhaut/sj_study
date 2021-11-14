import React, {useState, useReducer} from 'react';
import CounterReducer from '../reducers/CounterReducer';



const Page2 = () => {
  const [ qty, setQty ] = useState('');
  const [ count, dispatch ] = useReducer( CounterReducer,0 );

  const minus = () => {
    dispatch({ type: 'MINUS'});
  };

  const custom = () => {
    dispatch({ type: 'MINUS_CUSTOM', value: Number(qty)})
  };

  return (
    <div>
      <h1>Page2 Component</h1>
      <h1>Count: {count}</h1>
      <input value={qty} onChange={(ev) => setQty(ev.target.value) }/>
      <button onClick={minus}>감소 -1</button>
      <button onClick={custom}>custom</button>
    </div>

  );
};

export default Page2;