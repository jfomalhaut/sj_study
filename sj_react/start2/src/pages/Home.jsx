import React, {useState} from 'react';


const Home = ({history, match, location}) => { //history, match, location 모르겠음
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  };
  const goList = () => {
    history.push('/list');
  };
  return(
    <div>
      <h1>Home Component</h1>
      <h1>Count: {count}</h1>
      <button onClick={plus}>plus</button>
      <button onClick={goList}>List로 가는 버튼</button>
    </div>
  )



};


export default Home;