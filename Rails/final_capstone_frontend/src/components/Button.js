import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { BaseButton } from './styledBases';

const Btn = styled.button`
  ${BaseButton}
  border: 2px solid #000;
  padding: 0.7rem;
`;

const Button = props => {
  const { children } = props;
  return <Btn>{children}</Btn>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
