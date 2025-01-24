import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";

function Home() {
  return (
    <>
      {/* Full-Width Slider Section */}
      <section className="full-slider-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1500 }}
          loop
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="full-slide">
              <img
                src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
    
              />

            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="full-slide">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/33/261/282/5bd28eeaec175-wallpaper-preview.jpg"
                
              />
   
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="full-slide">
              <img
                src="https://wallpapercave.com/wp/wp12288311.jpg"
            
              />
          
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Home;
