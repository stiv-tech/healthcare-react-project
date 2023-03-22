import React from 'react';
import './display.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from '../Product';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Display() {
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button className="custom-arrow left" onClick={onClick}>
        <i class="bi bi-arrow-left" />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button className="custom-arrow right" onClick={onClick}>
        <i class="bi bi-arrow-right" />
      </button>
    );
  };

  const CustomDot = ({ active }) => {
    return (
      <span className={`custom-dot ${active ? 'active' : ''}`}>
      </span>
    );
  };

  return (
    <div className="container disp-cont">
      <Carousel
        responsive={responsive}
        showDots={true}
        autoPlay
        autoPlaySpeed={2000}
        infinite={true}
        arrows={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        customDot={<CustomDot />}
        renderButtonGroupOutside={true}
      >
        <Product />
        <Product />
        <Product />
        <Product />
      </Carousel>
    </div>
  );
}

export default Display;