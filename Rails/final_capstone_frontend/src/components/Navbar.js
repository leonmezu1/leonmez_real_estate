/* eslint-disable react/no-array-index-key */

import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiMenu4Fill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { loginStatus } from '../actions/authActions';
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
import NavbarAction from './NavbarAction';

const Navbar = () => {
  const content = 'HOME';

  const dispatch = useDispatch();
  const history = useHistory();
  const loggedIn = useSelector(state => state.auth.loggedIn);

  const [showModal, setShowModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState({
    status: false,
    target: '',
  });

  const closeModals = () => {
    setShowAuthModal({
      status: false,
      target: '',
    });
    setShowModal(false);
  };

  useEffect(() => {
    if (loggedIn) {
      closeModals();
    }
  }, [loggedIn]);

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
    if (e.key === 'Enter' && e.target.getAttribute('name') !== 'logout') {
      setShowModal(false);
      setShowAuthModal({
        status: true,
        target: e.target.getAttribute('name'),
      });
    } else {
      dispatch(loginStatus(false));
      history.push('/');
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
              <MenuLink
                to={menuItem.link}
                key={index}
                onClick={() => closeModals()}
              >
                {menuItem.title}
              </MenuLink>
            ))}
          </NavMenu>
          <ButtonWrapper>
            <NavBtn>
              <ButtonLink to="/sell" weight="700;">
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
            <>
              <NavbarAction
                name="dashboard"
                tabIndex="-5"
                onKeyPress={handleKeyPress}
                path="/dashboard"
                closeModals={closeModals}
              >
                Dashboard
              </NavbarAction>
              <NavbarAction
                name="logout"
                tabIndex="-4"
                onKeyPress={handleKeyPress}
                path="/"
                closeModals={closeModals}
              >
                Log out
              </NavbarAction>
            </>
          ) : (
            <>
              <NavbarAction
                name="register"
                tabIndex="-5"
                onClick={toggleAuthModal}
                onKeyPress={handleKeyPress}
                closeModals={closeModals}
              >
                Register
              </NavbarAction>
              <NavbarAction
                name="login"
                tabIndex="-4"
                onClick={toggleAuthModal}
                onKeyPress={handleKeyPress}
                closeModals={closeModals}
              >
                Log in
              </NavbarAction>
            </>
          )}
          <NavbarAction
            name="about"
            tabIndex="-3"
            path="/about"
            onKeyPress={handleKeyPress}
            closeModals={closeModals}
          >
            About
          </NavbarAction>
          <NavbarAction
            name="homes"
            tabIndex="-2"
            path="/homes"
            onKeyPress={handleKeyPress}
            closeModals={closeModals}
          >
            Homes
          </NavbarAction>
          <NavbarAction
            name="rentals"
            tabIndex="-1"
            path="/rentals"
            onKeyPress={handleKeyPress}
            closeModals={closeModals}
          >
            Rentals
          </NavbarAction>
          <NavbarAction
            name="help"
            tabIndex="0"
            path="/help"
            onKeyPress={handleKeyPress}
            closeModals={closeModals}
          >
            Help
          </NavbarAction>
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
