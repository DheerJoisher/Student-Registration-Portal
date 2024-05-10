import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
const slides = [
  {
    imageUrl:
      "https://www.canva.com/design/DAGExLc5wT4/Ii9k9u9OH2ixq8hTOTV56A/edit",
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