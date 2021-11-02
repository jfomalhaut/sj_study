import React from 'react';

const List = ({history, match, location}) => {
  const goHome = () => {
    history.push('/home');
  };

  return (
    <div>
      <h1>List Component</h1>
      <button onClick={goHome}
      >Home으로 가는 버튼</button>
    </div>
  )
};


export default List;