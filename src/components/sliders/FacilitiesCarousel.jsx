"use client";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide components
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "swiper/css"; // Import Swiper core styles
import "swiper/css/grid"; // Import Swiper Grid styles
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { Grid, Pagination, Navigation } from "swiper/modules";


// Facilities Images
const facilities = [
  "/facilities/arts.png",
  "/facilities/classes.png",
  "/facilities/clinic.png",
  "/facilities/football feild.png",
  "/facilities/library.png",
  "/facilities/Primary Reception.png",
  "/facilities/school yard.png",
  "/facilities/stage.png",
];

const FacilitiesCarousel = () => {
  return (
    <div className="h-full">
      <PhotoProvider>
        <Swiper
          modules={[Grid, Pagination, Navigation]}
          slidesPerView={1} // Default: Number of slides shown at once
          spaceBetween={0}
          grid={{ rows: 2, fill: "row" }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            500: {
              slidesPerView: 2, // Show 2 slides
              grid: { rows: 2 }, // 1 row
            },
            // When the viewport is >= 1024px (desktop)
            1024: {
              slidesPerView: 3, // Show 3 slides
              grid: { rows: 2 }, // 2 rows
            },
          }}
          className="mySwiper"
        >
          {facilities.map((facility, index) => (
            <SwiperSlide key={index}>
              <PhotoView src={`${facility}`}>
                <div className="group relative">
                  <Image
                    src={facility}
                    className="object-cover"
                    width={500}
                    height={500}
                    alt={`Facility ${index}`}
                    quality={100}
                  />
                  <div className="absolute inset-0 cursor-pointer transition-all duration-700 ease-in-out group-hover:bg-black/60"></div>
                </div>
              </PhotoView>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev">
            <FaArrowLeftLong size={20} />
          </div>
          <div className="swiper-button-next">
            <FaArrowRightLong size={20} />
          </div>
        </Swiper>
      </PhotoProvider>
    </div>
  );
};

export default FacilitiesCarousel;
