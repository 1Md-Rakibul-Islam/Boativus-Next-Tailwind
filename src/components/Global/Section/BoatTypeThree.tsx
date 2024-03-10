// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
// My modules
import { boatsTypes } from "@public/data/boatsTypes";

const BoatTypeThree = () => {
  return (
    <section className="section-py bg-white">
      <div className="swiper boat-types-carousel-1 px-1">
        <Swiper
          loop={true}
          speed={7000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={24}
          centeredSlides={false}
          breakpoints={{
            1400: {
              slidesPerView: 6,
              spaceBetween: 24,
              centeredSlides: false,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 20,
              centeredSlides: false,
            },
            991: {
              slidesPerView: 4,
              spaceBetween: 18,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 18,
              centeredSlides: false,
            },
            576: {
              slidesPerView: 2.5,
              spaceBetween: 18,
              centeredSlides: false,
            },
            480: {
              slidesPerView: 2.5,
              spaceBetween: 16,
              centeredSlides: true,
            },
            0: {
              slidesPerView: 1.2,
              spaceBetween: 16,
              centeredSlides: true,
            },
          }}
          modules={[FreeMode, Autoplay, Navigation]}
        >
          {boatsTypes?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full border border-[#A88A69] p-2 relative">
                <div className="relative z-[2] bg-white hover:bg-[#F2EBE2] my-transition p-[18px] rounded-10 flex-center">
                  <img
                    className="w-[106px] h-[106px]"
                    src={item?.image}
                    alt="icon"
                  />
                </div>
                <div className="absolute bg-white w-[103%] h-[60%] -left-1 right-0 top-1/2 -translate-y-1/2"></div>
                <div className="absolute bg-white w-[80%] h-[103%] -top-[3px] -bottom-1 left-1/2 -translate-x-1/2"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BoatTypeThree;
