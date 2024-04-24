import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StudentC = () => {
  const services = [
    {
      title: 'Courses',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://yourwebsite.com/service1',
    },
    {
      title: 'Downloads',
      image: 'https://plus.unsplash.com/premium_photo-1684522168034-32f22b4b7eef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://yourwebsite.com/service2',
    },
    {
      title: 'Edit info',
      image: 'https://plus.unsplash.com/premium_photo-1661582351565-9ef475b8df9e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://yourwebsite.com/service3',
    },
    {
        title: 'Your courses list',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://yourwebsite.com/service1',
      },
      {
        title: 'Our best picks',
        image: 'https://media.istockphoto.com/id/607301436/photo/choosing-the-key-to-success.webp?b=1&s=170667a&w=0&k=20&c=y3W9YiywqRw250ypEd44G3dA4_cPrGd9ImfeOsCg7lg=',
        link: 'https://yourwebsite.com/service1',
      },
      {
        title: 'Your Benefits',
        image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVuZWZpdHN8ZW58MHx8MHx8fDA%3D',
        link: 'https://yourwebsite.com/service1',
      },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Adjust this value based on your design
    }}>
      <Slider {...settings} style={{ width: '80%', maxWidth: '1200px' }}>
        {services.map((service, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <a href={service.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={service.image} alt={service.title} style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', marginBottom: '10px' }} />
              <h3 style={{ margin: '0' }}>{service.title}</h3>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StudentC;

