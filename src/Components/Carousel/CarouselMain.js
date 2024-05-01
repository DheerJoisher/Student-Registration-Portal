import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
const slides = [
  {
    imageUrl:
      "https://cdn.vox-cdn.com/thumbor/K3UUIhyF6hIqMFeOR47paUWLBPk=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/64675796/shutterstock_85875151.0.jpg",
  },
  {
    imageUrl:
      "https://i.insider.com/6340783eb3e94d0019781b4e?width=700",
  },
  {
    imageUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/3Mz6t2p2yHYqZcIM0ic9E2/3b7037fe8871187415500fb9202608f7/Man-Stock-Photos.jpg",
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

const CarouselMain = () => {
  return (
    <div className="App">
      <Carousel />
    </div>
  );
};

export default CarouselMain;