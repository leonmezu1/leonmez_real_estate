import styled /* , { css } */ from 'styled-components';

const HeroSection = styled.section`
  height: calc(100vh - 6rem);
  max-height: 110rem;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Hero = () => (
  <HeroSection>
    <HeroWrapper>
      <h1>Hero</h1>
    </HeroWrapper>
  </HeroSection>
);

export default Hero;
