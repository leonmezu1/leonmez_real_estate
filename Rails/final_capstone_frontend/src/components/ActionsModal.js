import PropTypes from 'prop-types';
import { useEffect, useRef, useCallback } from 'react';
import { Background, StyledModal } from './styledBases';

const ActionsModal = ({
  children, showModal, setShowModal, auth,
}) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const KeypressHandler = useCallback(e => {
    if (e.key === 'Escape' && showModal) {
      setShowModal(false);
    }
  });

  useEffect(() => {
    document.addEventListener('keydown', KeypressHandler);
    return () => {
      document.removeEventListener('keydown', KeypressHandler);
    };
  }, [setShowModal, showModal]);

  return showModal ? (
    <Background ref={modalRef} onClick={closeModal} auth={auth}>
      <StyledModal auth={auth}>{children}</StyledModal>
    </Background>
  ) : null;
};

ActionsModal.propTypes = {
  children: PropTypes.node.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  auth: PropTypes.bool,
};

ActionsModal.defaultProps = {
  auth: false,
};

export default ActionsModal;
