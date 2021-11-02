import React, {useState } from 'react';

const Home = ({history, match, location}) => {
  const goList = () => {
      history.push('/list');
  }
  const [count, setCount] = useState(10);
  const plus = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Home Component</h1>
      <h1>Count: {count}</h1>
      <button onClick={plus}>plus</button>
      <button onClick={goList}>List로 가는 버튼</button>  
    </div>
  );
};



export default Home;