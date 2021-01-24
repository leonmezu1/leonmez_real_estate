/* eslint-disable react/no-array-index-key */

import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import menuData from '../data/menuData';

const MenuBars = styled.i``;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = css`
  color: #fff;
  display: flex;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  align-items: center;
`;

const Nav = styled.nav`
  width: 100%;
  height: 6rem;
  padding: 1rem 2rem;
  z-index: 500;
  position: fixed;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${StyledLink}
`;

const MenuLink = styled(Link)`
  ${StyledLink}
`;

const Navbar = () => {
  const content = 'HOME';

  return (
    <Nav>
      <Logo to="/">{content}</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((menuItem, index) => (
          <MenuLink to={menuItem.link} key={index}>
            {menuItem.title}
          </MenuLink>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
