import Image from "next/image";
import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import styled from "@emotion/styled";

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 26%;
  overflow: hidden;
  @media (min-width: 1440px) {
    position: relative;
    height: 700px;
    overflow: hidden;
  }
`;
const TestimonialTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.66px;
  line-height: 45px;
  text-align: center;
  color: var(--veryDarkBlue);
  @media (min-width: 1440px) {
  }
`;
const TestimonialSlider = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 62px;
  @media (min-width: 1440px) {
    position: absolute;
    top: 158px;
    right: -120px;
  }
`;

const TestimonialCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 340px;
  height: 284px;
  :not(::first-of-type) {
    margin-left: 30px;
  }
  @media (min-width: 1440px) {
    width: 540px;
    height: 256px;
  }
`;
const TestimonialCardBackground = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 85%;
  z-index: -1;
  background: linear-gradient(var(--varyLightGray), var(--varyLightGray));
  @media (min-width: 1440px) {
  }
`;
const TestimonialCardImageContainer = styled.div`
  height: 72px;
  width: 72px;
  @media (min-width: 1440px) {
  }
`;
const TestimonialCardTitle = styled.div`
  margin-top: 24px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.29px;
  @media (min-width: 1440px) {
  }
`;
const TestimonialCardCopy = styled.div`
  margin-top: 19px;
  width: 298px;
  font-size: 14px;
  text-align: center;
  line-height: 26px;
  color: var(--darkGrayishBlue);
  @media (min-width: 1440px) {
    width: 460px;
  }
`;
const TestimonialNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43px;
  height: 7px;
  margin-top: 28px;
  @media (min-width: 1440px) {
    display: none;
  }
`;

const Dot = styled.span`
  margin: 0 5px 0 5px;
  height: 7px;
  width: 7px;
  background-color: var(--veryPaleRed);
  border-radius: 50%;
  border: 4px solid var(--brightRed);
  display: inline-block;
  cursor: pointer;
  @media (min-width: 1440px) {
  }
`;
const TestimonialButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  @media (min-width: 1440px) {
  }
`;

const Slide = ({ src, title, testimonial }) => {
  return (
    <>
      <TestimonialCard>
        <TestimonialCardBackground></TestimonialCardBackground>
        <TestimonialCardImageContainer>
          <Image src={src} layout="fixed" height={72} width={72} />
        </TestimonialCardImageContainer>
        <TestimonialCardTitle>{title}</TestimonialCardTitle>
        <TestimonialCardCopy>{testimonial}</TestimonialCardCopy>
      </TestimonialCard>
    </>
  );
};

const Slider = ({ testimonials }) => {
  const isBreakpoint = useMediaQuery(1440);
  let tempTestimonials = testimonials;

  const [slideIndex, setSlideIndex] = useState({
    pixels: 0,
    dot: 0,
    transition: 1,
  });

  const [translateX, setTranslateX] = useState({
    pixels: 0,
    count: 0,
    transition: 1,
  });
  // DESKTOP
  if (!isBreakpoint) {
    const handleTranslate = () => {
      if (translateX.count === tempTestimonials.length - 3) {
        setTranslateX({
          transition: 0,
          pixels: 0,
          count: 0,
        });
      } else {
        setTranslateX({
          transition: 1,
          count: translateX.count + 1,
          pixels: translateX.pixels + 570,
        });
      }
    };

    setTimeout(() => {
      handleTranslate();
    }, 6000);
    return (
      <>
        <TestimonialContainer>
          <TestimonialTitle>What they’ve said</TestimonialTitle>
          <TestimonialSlider
            style={{
              transform: `translateX(${translateX.pixels}px)`,
              transition: `all ${translateX.transition}s`,
            }}
          >
            {tempTestimonials.map((element, index) => (
              <Slide
                key={index}
                src={element.src}
                title={element.title}
                testimonial={element.testimonial}
              />
            ))}
          </TestimonialSlider>
          <TestimonialNavigation>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
          </TestimonialNavigation>
          <TestimonialButtonContainer>
            <button>Get Started</button>
          </TestimonialButtonContainer>
        </TestimonialContainer>
      </>
    );
    // MOBILE
  } else {
    const handleSlideIndex = (index) => (e) => {
      if (index === 0) {
        setSlideIndex({
          ...slideIndex,
          dot: index,
          pixels: 0,
        });
      } else if (index === 1) {
        setSlideIndex({
          ...slideIndex,
          dot: index,
          pixels: -370,
        });
      } else if (index === 2) {
        setSlideIndex({
          ...slideIndex,
          dot: index,
          pixels: -740,
        });
      } else if (index === 3) {
        setSlideIndex({
          ...slideIndex,
          dot: index,
          pixels: -1110,
        });
      }
    };

    return (
      <>
        <TestimonialContainer>
          <TestimonialTitle>What they’ve said</TestimonialTitle>
          <TestimonialSlider
            style={{
              transform: `translateX(${slideIndex.pixels}px)`,
              transition: `all 1s`,
            }}
          >
            {tempTestimonials.map((element, index) => (
              <Slide key={index} src={element.src} title={element.title} />
            ))}
          </TestimonialSlider>
          <TestimonialNavigation>
            <Dot onClick={handleSlideIndex(0)}></Dot>
            <Dot onClick={handleSlideIndex(1)}></Dot>
            <Dot onClick={handleSlideIndex(2)}></Dot>
            <Dot onClick={handleSlideIndex(3)}></Dot>
          </TestimonialNavigation>
          <TestimonialButtonContainer>
            <button>Get Started</button>
          </TestimonialButtonContainer>
        </TestimonialContainer>
      </>
    );
  }
};

export default Slider;
