import { css } from 'styled-components/macro';

export const BaseButton = css`
  background: ${({ primary }) => (primary ? '#000d1a' : '#fff')};
  padding: ${({ big }) => (big ? '1.6rem' : '1.2rem')};
  color: ${({ primary }) => (primary ? '#000d1a' : '#000')};
  font-size: ${({ big }) => (big ? '2rem' : '1.6rem')};
  font-weight: ${({ weight }) => weight}
  margin-right: 1rem;
  white-space: wrap;
  outline: none;
  border: none;
  min-width: 10rem;
  max-width: 20rem;
  text-decoration: none;
  transition: 0.3s background;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 1rem;

  &:hover {
    background: #000;
    border: 2px solid #fff;
    color: #fff;
  }
`;

export const BaseModal = css`
  position: absolute;
  top: 10rem;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
