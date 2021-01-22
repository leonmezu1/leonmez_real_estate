/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import menuData from '../data/menuData';

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const MenuBars = styled.i``;

const NavMenu = styled.div``;

const MenuLink = styled(Link)`
  color: #fff;
`;

const Nav = styled.nav`
  width: 100%;
  height: 6rem;
  background: #000;
  display: flex;
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
