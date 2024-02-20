"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect } from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface AutoSwipeImagesProps {
  images: string[];
}

const AutoSwipeImages: React.FC<AutoSwipeImagesProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      modules: [Navigation, Pagination],
      spaceBetween: 30,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 3000,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="swiper-container">
      <div ref={swiperRef} className="swiper-wrapper">
        {images.map((image, index) => (
          <div key={index} className="swiper-slide">
            <img src={image} alt="#" />
          </div>
        ))}
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default AutoSwipeImages;