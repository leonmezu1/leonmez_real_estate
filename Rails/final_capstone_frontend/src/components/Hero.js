import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { softFadeIn } from './styledBases';
import ButtonLink from './ButtonLink';

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

const HeroSlider = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: 50% 50%;
  animation: ${softFadeIn} 1s linear;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 160rem;
  width: calc(100% - 10rem);
  color: #fff;

  h1,
  p {
    text-shadow: -4px 0px 6px rgba(0, 0, 0, 0.9);
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: clamp(2.2rem, 8vw, 3.2rem);
  }

  p {
    font-size: clamp(1.6rem, 8vw, 2.4rem);
  }

  @media screen and (max-width: 768px) {
    margin-top: 10rem;
  }
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 5rem;
  display: flex;
  z-index: 2000;

  @media screen and (max-width: 768px) {
    bottom: 7.5rem;
    right: 1.5rem;
  }
`;

const ArrowButtons = css`
  width: 2.5rem;
  height: 2.5rem;
  color: #fff;
  cursor: pointer;
  background-color: #000d1a;
  border-radius: 5rem;
  padding: 1rem;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  border: 1px solid transparent;

  &:hover {
    background: #fff;
    color: #000d1a;
    transform: scale(1.05);
    border: 1px solid #000d1a;
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${ArrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
  ${ArrowButtons}
`;

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const { length } = slides;
  const timeOut = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1));
    };

    timeOut.current = setTimeout(nextSlide, 5000);

    return () => {
      if (timeOut.current) clearTimeout(timeOut.current);
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeOut.current) clearTimeout(timeOut.current);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeOut.current) clearTimeout(timeOut.current);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length <= 0) return null;

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => (
          <HeroSlide key={slide.home.id}>
            {index === current && (
              <HeroSlider>
                <HeroImage src={slide.image} alt={slide.alt} />
                <HeroContent>
                  <h1>{slide.home.title}</h1>
                  <p>{slide.home.price}</p>
                  <ButtonLink to={slide.path} width="11rem;" primary="true">
                    {slide.label}
                    <IoMdArrowRoundForward />
                  </ButtonLink>
                </HeroContent>
              </HeroSlider>
            )}
          </HeroSlide>
        ))}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

Hero.propTypes = {
  slides: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default Hero;
