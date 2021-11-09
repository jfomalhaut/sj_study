import React, {useState, useEffect} from 'react';
import Items from '../jsons/items.json';
import Item from '../components/item';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Product = ({ history, match }) => {
  const { params: { category } } = match;
  const [list, setList] = useState([]);

  const transType = (cate) => {
    switch(cate) {
      case 'fish': return 1;
      case 'fruit': return 2;
      case 'vegetable': return 3;
      default: return 0;
    }
  }

  useEffect(() => {
    // if(category === 'fish') {
    //   const result = Items.filter(item => item.type === 1);
    //   setList(result);
    // } 

    if (category === 'all') {
      setList(Items);
      return;
    }
    const type = transType(category);
    const result = Items.filter(item => item.type === type);
    setList(result);
  }, [category]);

  return (
    <ProductComponent>
      <h1>Product</h1>
      <nav>
        <Link to="/product/all">전체</Link>
        <Link to="/product/fish">수산물</Link>
        <Link to="/product/fruit">과일</Link>
        <Link to ="/product/vegetable">야채</Link>
      </nav>
      <ul>
        {list.map((item) => (
          <Item key={item.id} item={item} />
        ))
        }
      </ul>
    </ProductComponent>
  );
};



export default Product;

const ProductComponent = styled.div`
  nav {
    display: flex;
    justify-content: center;
    a {
      font-size: 20px;
      margin: 0 10px;
      font-weight: 500;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 1000px;
    margin: 50px auto;
    grid-gap: 10px;
  }
`;