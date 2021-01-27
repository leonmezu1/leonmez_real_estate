import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const BaseButton = css`
  background: ${({ primary }) => (primary ? '#000d1a' : '#fff')};
  padding: ${({ big }) => (big ? '1.6rem' : '1.2rem')};
  color: ${({ primary }) => (primary ? '#000d1a' : '#000')};
  font-size: ${({ big }) => (big ? '2rem' : '1.6rem')};
  font-weight: ${({ weight }) => weight}
  margin-right: 1rem;
  white-space: wrap;
  outline: none;
  border: 2px solid transparent;
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
    background: #000;
    border: 2px solid #fff;
    color: #fff;
  }
`;

export const BaseModal = css`
  width: fit-content;
  position: absolute;
  top: 3rem;
  right: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BaseMenuBars = css`
  color: #000d1a;
  background: #fff;
  border: 0.2rem solid #000d1a;
  border-radius: 1rem;
  padding: 1rem;
  font-size: 2rem;
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;

export const BaseNavMenu = css`
  display: flex;
  align-items: center;
  justify-self: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BaseNav = css`
  width: 100%;
  height: 6rem;
  z-index: 500;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  overflow: hidden;
  position: fixed;
  bottom: 0 !important;
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    position: sticky;
    top: 0;
    margin-top: 0;
  }
`;

export const MenuBars = styled.div`
  ${BaseMenuBars}
`;

export const NavMenu = styled.div`
  ${BaseNavMenu}
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Nav = styled.nav`
  ${BaseNav}
`;

export const StyledLink = css`
  color: #fff;
  display: flex;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
`;

export const Logo = styled(Link)`
  ${StyledLink}
  padding: 0;
  font-weight: 700;
`;

export const MenuLink = styled(Link)`
  ${StyledLink}
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1.5px solid lightgray;
  border-radius: 1rem;
  padding: 0.5rem 0;
  overflow: hidden;

  & > * {
    align-items: center;
    justify-content: flex-start;
    display: flex;
    height: 3rem;
    width: 12rem;
    cursor: pointer;
    padding-left: 2rem;
    border-radius: 0.3rem 0.3rem;
    font-size: 1.5rem;
  }

  & > *:hover {
    background: #efeded;
  }

  span:nth-child(2) {
    border-bottom: 1px solid lightgray;
  }

  span:last-child {
    margin-top: 0.5rem;
  }

  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
`;

export const Background = styled.div`
  width: 100vw;
  height: calc(100vh - 6rem);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1000;
  background: ${({ auth }) => (auth ? 'rgba(0, 0, 0, 0.25)' : 'transparent')};
`;

export const StyledModal = styled.div`
  ${BaseModal}
  top: ${({ auth }) => (auth ? '50%' : '3rem')};
  left: ${({ auth }) => (auth ? '50%' : null)};
  right: ${({ auth }) => (auth ? '0' : '2.2rem')};
  transform: ${({ auth }) => (auth ? 'translate(-50%, -50%)' : null)};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: 30rem;
  background: #fff;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  margin-bottom: 2.5rem;
  width: 25rem;
`;

export const Input = styled.input`
  margin: 1rem 0;
  border: none;
  border-bottom: 1px solid black;
  padding: 0.5rem;
  font-size: 1.6rem;
`;

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 1rem;
  background-color: #000;
  color: #fff;
  padding: 1rem;
  width: 33%;
  text-align: center;
  margin: auto;
  margin-top: 2.5rem;
  transition: 0.3s;
  font-size: 1.6rem;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const Error = styled.div`
  max-width: 30rem;
  border: 1px solid red;
  padding: 1rem;
  color: red;
  text-align: center;
`;
