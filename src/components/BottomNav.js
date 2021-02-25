import styled from 'styled-components/macro';

const Nav = styled.div`
  width: 100%;
  height: 6rem;
  background: #f7ebe8;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
const BottomNav = () => {
  const info = 'Im a navbar';

  return (
    <Nav>
      <Wrapper>{info}</Wrapper>
    </Nav>
  );
};

export default BottomNav;
