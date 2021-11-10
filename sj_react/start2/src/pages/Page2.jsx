import React, {useReducer} from 'react';
import CounterReducer from './reducers/CounterReducer';

const Page2 = () => {
  const [ count, dispatch ] = useReducer(CounterReducer, 0);

  const minus = () => {
    dispatch({ type: 'minus' });
  };

  return (
    <div>
      <h1>Page2</h1>
      <h1>Count: {count}</h1>
      <button onClick={minus}>감소 -1</button>
    </div>
  );
};



export default Page2;