import React from 'react';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import pic1 from '../../assets/images/slide1.jpg'
import pic2 from '../../assets/images/slide2.jpg'
const images = [
  {
    url:pic2,
    alt: 'Slider Image 2',
  },
  {
    url:pic1,
    alt: 'Slider Image 1',
  },


];


const Slider = () => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
    
      spaceBetween={10}
      slidesPerView={1}
      
    >
      {images.map((image) => (
        <SwiperSlide key={image.url}>
          <img src={image.url} alt={image.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
