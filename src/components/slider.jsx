import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const ImageSlider = () => {
  const images = [
    "/assests/blessing-gate/bishop.jpg",
    "/assests/blessing-gate/banner2.jpg",
    "/assests/blessing-gate/back.jpg",
    "/assests/blessing-gate/banner5.jpg",
    "/assests/blessing-gate/banner6.jpg",
    "/assests/blessing-gate/executive.jpg",
    "/assests/blessing-gate/rhab1.jpg",
    "/assests/blessing-gate/rhab2.jpg",
    "/assests/blessing-gate/rhab3.jpg",
    "/assests/blessing-gate/rhab8.jpg",
    "/assests/blessing-gate/rhab9.jpg",
    "/assests/blessing-gate/wid3.jpg",
    "/assests/blessing-gate/widow2.jpg",
    "/assests/blessing-gate/pty.jpg",
    "/assests/blessing-gate/KDD.jpg",
    "/assests/blessing-gate/bles.jpg",
  ];

  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        // navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="banner-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
