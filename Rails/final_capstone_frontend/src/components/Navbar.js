/* eslint-disable react/no-array-index-key */

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RiMenu4Fill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import ButtonLink from './ButtonLink';
import menuData from '../data/menuData';
import Registration from './auth/Registration';
import Login from './auth/Login';
import ActionsModal from './ActionsModal';
import {
  ActionsContainer,
  ButtonWrapper,
  Logo,
  MenuBars,
  MenuLink,
  Nav,
  NavBtn,
  NavMenu,
  Wrapper,
} from './styledBases';

const Navbar = () => {
  const content = 'HOME';

  const [showModal, setShowModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState({
    status: false,
    target: '',
  });

  const loggedIn = useSelector(state => state.auth.loggedIn);

  const toggleUserModal = () => {
    const { status } = showAuthModal;

    if (status) {
      setShowAuthModal({
        status: false,
        target: '',
      });
    }
    setShowModal(prev => !prev);
  };

  const toggleAuthModal = e => {
    setShowModal(false);
    setShowAuthModal({
      status: true,
      target: e.target.getAttribute('name'),
    });
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      setShowModal(false);
      setShowAuthModal({
        status: true,
        target: e.target.getAttribute('name'),
      });
    }
  };

  const { status, target } = showAuthModal;

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
            <MenuBars onClick={toggleUserModal}>
              <FaUserCircle />
              <RiMenu4Fill />
            </MenuBars>
          </ButtonWrapper>
        </Wrapper>
      </Nav>
      <ActionsModal showModal={showModal} setShowModal={setShowModal}>
        <ActionsContainer>
          {loggedIn ? (
            <span>Log out</span>
          ) : (
            <>
              <span
                role="button"
                name="register"
                tabIndex="-1"
                onClick={toggleAuthModal}
                onKeyPress={handleKeyPress}
              >
                Register
              </span>
              <span
                name="login"
                role="button"
                tabIndex="0"
                onClick={toggleAuthModal}
                onKeyPress={handleKeyPress}
              >
                Log in
              </span>
            </>
          )}
          <span>Help</span>
        </ActionsContainer>
      </ActionsModal>
      {status ? (
        <ActionsModal showModal={status} setShowModal={setShowAuthModal} auth>
          {target === 'register' ? <Registration /> : <Login />}
        </ActionsModal>
      ) : null}
    </>
  );
};

export default Navbar;
