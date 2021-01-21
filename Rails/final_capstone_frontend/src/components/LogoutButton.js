/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { loginStatus } from '../actions/authActions';
import { logout } from '../config/axiosConfig';

const BtnLink = styled.button`
  padding: 1rem;
  text-align: center;
  text-decoration: none;
`;

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const performLogout = () => {
    logout();
    dispatch(loginStatus(false));
    history.push('/');
  };

  return (
    <BtnLink
      onClick={() => {
        performLogout();
      }}
    >
      Log out
    </BtnLink>
  );
};

export default LogoutButton;
