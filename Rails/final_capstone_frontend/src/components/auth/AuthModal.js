import styled from 'styled-componets';
import { BaseModal } from '../styledBases';

const StyledModal = styled.div`
  ${BaseModal}
  top: 0;
  left: 0;
  right: 0;
`;

const AuthModal = () => <div>Modal</div>;

export default AuthModal;
