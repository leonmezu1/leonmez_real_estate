import PropTypes from 'prop-types';
import { useEffect, useRef, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { Background, StyledModal } from './styledBases';

const ActionsModal = props => {
  const {
    children, showModal, setShowModal, auth,
  } = props;

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0%)' : 'translateY(-100%)',
  });

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
      <animated.div animation={animation}>
        <StyledModal auth={auth}>{children}</StyledModal>
      </animated.div>
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
