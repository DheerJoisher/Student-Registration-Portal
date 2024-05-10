import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TeachLand.css';
import t1 from './t1.png'
import t2 from './t2.png'
import t3 from './t3.png'
import t4 from './t4.png'

const slides = [
  {
    imageUrl:
      t1,
  },
  {
    imageUrl:
      t2,
  },
  {
    imageUrl:
      t3,
  },
  {
    imageUrl:
      t4,
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.imageUrl} alt={slide.title} />
          </div>
      ))}
    </Slider>
  );
};

const TeachLandMain = () => {
  return (
    <div className="App">
      <Carousel />
    </div>
  );
};

export default TeachLandMain;