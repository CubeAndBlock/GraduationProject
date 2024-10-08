"use client"

import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Slide {
  id: number;
  imageUrl: string;
  altText: string;
}

const slides: Slide[] = [
  { id: 1, imageUrl: 'banner/banner1.png', altText: 'Banner 1' },
  { id: 2, imageUrl: 'banner/banner2.png', altText: 'Banner 2' },

];

const BannerSlider: React.FC = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      modules: [Navigation, Pagination, Autoplay], // Kích hoạt Navigation và Pagination
      loop: true, // Cho phép quay vòng slide
      autoplay: {
        delay: 3000, // Slide tự động chuyển sau 3 giây
      },
      pagination: {
        el: '.swiper-pagination', // Selector cho phần phân trang
        clickable: true, // Cho phép click vào các chấm phân trang
      },
      navigation: {
        nextEl: '.swiper-button-next', // Nút Next
        prevEl: '.swiper-button-prev', // Nút Previous
      },
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {slides.map(slide => (
          <div key={slide.id} className="swiper-slide">
            <img src={slide.imageUrl} alt={slide.altText} className=''/>
          </div>
        ))}
      </div>

      {/* Pagination (dấu chấm nhỏ để hiển thị vị trí slide) */}
      <div className="swiper-pagination"></div>

      {/* Nút Previous */}
      <div className="swiper-button-prev"></div>

      {/* Nút Next */}
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default BannerSlider;
