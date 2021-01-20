import { Link } from 'react-router-dom';
import styled from 'styled';
import PropTypes from 'prop-types';

const BtnLink = styled.Button`
  padding: 1rem;
  text-align: center;
  text-decoration: none;
`;

const ButtonLink = ({ to }) => (
  <BtnLink>
    <Link to={to} />
  </BtnLink>
);

ButtonLink.propTypes = {
  to: PropTypes.string,
};

ButtonLink.defaultProps = {
  to: '/#!',
};

export default ButtonLink;
