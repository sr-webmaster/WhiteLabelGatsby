import React from 'react';
import Carousel from 'react-slick';
import Dots from './Dots';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

export default (props) => (
  <div className="carousel">
    <Carousel
      autoplay={true}
      dots={true}
      slidesToShow={1}
      slidesToScroll={1}
      prevArrow={<LeftArrow />}
      nextArrow={<RightArrow />}
      >
      {props.children}
    </Carousel>
  </div>
);
