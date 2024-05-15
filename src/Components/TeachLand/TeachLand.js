import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TeachLand.css';
import Navbar3 from "../TeachNav/Navbar3";
import Teachfoot from "../Teachfoot/Teachfoot";
import t1 from './t1.png'
import t2 from './t2.png'
import t3 from './t3.png'
import t4 from './t4.png'

const slides = [
  { imageUrl: t1 },
  { imageUrl: t2 },
  { imageUrl: t3 },
  { imageUrl: t4 },
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
    <>
      <div className="background-container">
        <Navbar3 />
        <div className="dj1">
          <Carousel />
        </div>
        <Teachfoot />
      </div>
    </>
  );
};

export default TeachLandMain;
