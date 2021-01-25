import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#000d1a' : '#2C7DA0')};
  padding: ${({ big }) => (big ? '1.6rem' : '1.2rem')};
  color: ${({ primary }) => (primary ? '#000d1a' : '#fff')};
  font-size: ${({ big }) => (big ? '2rem' : '1.6rem')};
  font-weight: ${({ weight }) => weight}
  margin-right: 1rem;
  white-space: wrap;
  outline: none;
  border: none;
  min-width: 10rem;
  max-width: 20rem;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 1rem;

  &:hover {
    background: #014F86;
  }
`;

export default Button;
