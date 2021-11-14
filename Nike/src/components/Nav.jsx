import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Nav = () => {
  return (
    <NavComponents>
      <Top>
        <TopUser>
          <li>Help</li>
          <li>Join Us</li>
          <li>Sign In</li>
        </TopUser>
      </Top>
      <Middle>
          <MiddleNav>
            <li>New Releases</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>     
          </MiddleNav>
      </Middle> 
    

    </NavComponents>
  );
};

export default Nav;


const NavComponents = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const Top = styled.div`
  background: #f5f5f5;
  height: 36px;
  display: flex;
  justify-content: space-between;

`;

const TopLogo = styled.div`
  width:
  height:
  background-image:
`

const TopUser = styled.ul`
  list-style: none;
  display: flex;
  font-size: 12px;
  gap: 10px;
`;

const Middle = styled.div`
  background: orange;
  display: flex;
  justify-content: space-between;
  height: 60px;
`;

const MiddleNav = styled.ul`
  list-style: none;
  display: flex;
  font-size: 16px;
  gap: 28px;
`;




