import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './StudLand.css';
import Navbar2 from "../StudNav/Navbar2";
import Footer from "../Studfoot/Studfoot"
import s1 from './s1.png'
import s2 from './s2.png'
import s3 from './s3.png'
import s4 from './s4.png'
import s5 from './s5.png'

const slides = [
  { imageUrl: s1 },
  { imageUrl: s2 },
  { imageUrl: s3 },
  { imageUrl: s4 },
  { imageUrl: s5 },
];

const StudLand = () => {
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

const StudLandMain = () => {
  return (
    <>
      <Navbar2 />
      <div className="page-container">
        <div className="dj1">
          <StudLand />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudLandMain;
