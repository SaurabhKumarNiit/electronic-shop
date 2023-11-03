import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.h1`
  color: white;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 767px) {
    margin-top: 10px;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Electronic Shop</Logo>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="#">Products</NavLink>
        <NavLink href="#">About</NavLink>
      
      
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
