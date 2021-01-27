import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginStatus } from '../actions/authActions';
import { Button } from './styledBases';

const BtnLink = styled.button`
  ${Button}
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
