import React, {useState, useEffect } from 'react';



const Cart = () => {
  const [count, setCount] = useState(0);
  const price = 2000;
  const limit = 30000;
  const [fee, setFee] = useState(2500);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  useEffect( () => {
    if (count * price >= limit) {
     setFee(0); 
    } else {
      setFee(2500);
    }
  },[count])


  return (
    <div>
      <section>
        <h1>상품가격 : {price}원 </h1>
        <h1>배송료 : {fee}원 </h1>
        <h1>수량 : {count}개</h1>
        <h1>총합 : {price * count + fee}원</h1>
      </section>
      <button onClick={plus}>수량증가</button>
      <button onClick={minus}>수량감소</button>
    </div>
  )
};


export default Cart;