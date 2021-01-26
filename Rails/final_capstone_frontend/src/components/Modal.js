import styled from 'styled-components/macro';
import Button from './Button';
import { BaseModal } from './styledBases';

const StyledModal = styled.div`
  ${BaseModal}
`;

const Modal = () => {
  const text = 'text';
  return (
    <StyledModal>
      <div>{text}</div>
      <Button>Auth action</Button>
    </StyledModal>
  );
};

export default Modal;
