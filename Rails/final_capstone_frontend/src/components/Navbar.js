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
            <>
              <span
                role="button"
                name="dashboard"
                tabIndex="-2"
                onKeyPress={handleKeyPress}
                onClick={() => {
                  history.push('/dashboard');
                }}
              >
                Dashboard
              </span>
              <span
                role="button"
                name="logout"
                tabIndex="-1"
                onKeyPress={handleKeyPress}
                onClick={() => {
                  dispatch(loginStatus(false));
                  history.push('/');
                }}
              >
                Log out
              </span>
            </>
          ) : (
            <>
              <span
                role="button"
                name="register"
                tabIndex="-2"
                onClick={toggleAuthModal}
                onKeyPress={handleKeyPress}
              >
                Register
              </span>
              <span
                name="login"
                role="button"
                tabIndex="-1"
                onClick={toggleAuthModal}
                onKeyPress={handleKeyPress}
              >
                Log in
              </span>
            </>
          )}
          <span
            name="help"
            role="button"
            tabIndex="0"
            onClick={() => history.push('/')}
            onKeyPress={handleKeyPress}
          >
            Help
          </span>
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
