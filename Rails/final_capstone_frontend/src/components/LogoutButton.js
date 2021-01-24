import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { loginStatus } from '../actions/authActions';

const BtnLink = styled.button`
  padding: 1rem;
  text-align: center;
  text-decoration: none;
`;

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <BtnLink
      onClick={() => {
        dispatch(loginStatus(false));
        history.push('/');
      }}
    >
      Log out
    </BtnLink>
  );
};

export default LogoutButton;
