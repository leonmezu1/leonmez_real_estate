/* eslint-disable react/no-array-index-key */

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RiMenu4Fill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import styled, { css } from 'styled-components/macro';
import ButtonLink from './ButtonLink';
import menuData from '../data/menuData';
import Modal from './Modal';

const MenuBars = styled.div`
  color: #000d1a;
  background: #fff;
  border: 0.2rem groove #000d1a;
  border-radius: 1rem;
  padding: 1rem;
  font-size: 2rem;
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = css`
  color: #fff;
  display: flex;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
`;

const Nav = styled.nav`
  width: 100%;
  height: 6rem;
  z-index: 500;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  overflow: hidden;
  position: fixed;
  bottom: 0 !important;
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    position: sticky;
    top: 0;
    margin-top: 0;
  }
`;

const Logo = styled(Link)`
  ${StyledLink}
  padding: 0;
  font-weight: 700;
`;

const MenuLink = styled(Link)`
  ${StyledLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = () => {
  const content = 'HOME';

  const [showModal, setshowModal] = useState(false);

  const toggleAuthModal = () => {
    setshowModal(!showModal);
  };

  return (
    <>
      <Nav>
        <Wrapper>
          <Logo to="/">{content}</Logo>
          <NavMenu>
            {menuData.map((menuItem, index) => (
              <MenuLink to={menuItem.link} key={index}>
                {menuItem.title}
              </MenuLink>
            ))}
          </NavMenu>
          <ButtonWrapper>
            <NavBtn>
              <ButtonLink to="/contact" weight="700;">
                Sell or Host
              </ButtonLink>
            </NavBtn>
            <MenuBars onClick={toggleAuthModal}>
              <FaUserCircle />
              <RiMenu4Fill />
            </MenuBars>
          </ButtonWrapper>
        </Wrapper>
      </Nav>
      <Modal show={showModal} />
    </>
  );
};

export default Navbar;
