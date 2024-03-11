"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// My modules

import { services } from "@public/data/services";
import { ArrowCircleRight } from "@phosphor-icons/react";
import Image from "next/image";

const ServicesTwo = () => {
  return (
    <section className="our-services-2">
      <div className="relative">
        <div className="swiper services2-carousel lg:pb-16 md:pb-12 sm:pb-10 pb-8 lg:px-0 px-5">
          <Swiper
            loop={true}
            speed={2000}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            centeredSlides={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: false,
              },
              1200: {
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
              992: {
                slidesPerView: 1.3,
                spaceBetween: 24,
              },
              786: {
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            modules={[FreeMode, Autoplay, Pagination]}
            className="swiper-wrapper"
          >
            {services?.slice(5, 10)?.map((item, idx) => (
              <SwiperSlide key={idx} className="swiper-slide">
                <div className="p-32px bg-brown-B50 grid xxl:grid-cols-12 lg:grid-cols-2 grid-cols-1  items-center my-gap-24">
                  <div className="xxl:col-start-1 xxl:col-end-6 overflow-hidden xxl:mr-0 xl:mr-5">
                    <Image
                      className="w-full hover:scale-110 my-transition"
                      src={item?.image}
                      alt=""
                    />
                  </div>
                  <div className="xxl:col-start-7 xxl:col-end-13">
                    <div className="border-b border-[#E7D1B9] xl:pb-[55px] lg:pb-12 md:pb-11 sm:pb-10 pb-8">
                      <h4 className="text-57 text-blue-B900 gap-mb-16">
                        {item?.title}
                      </h4>
                      <p className="text-18 text-blue-B90">
                        Length : {item?.length} m / Passengers :{" "}
                        {item?.passengers}
                      </p>
                    </div>
                    <div className="flex justify-between items-center flex-wrap my-gap-24 gap-mt-40">
                      <div>
                        <h4 className="text-32 gap-mb-16">Price</h4>
                        <span className="text-24">{item?.price} €</span>
                      </div>
                      <a
                        href="#"
                        className="btn flex-centerY gap-2 text-white hover:text-blue-B900 bg-blue-B700 hover:bg-brown-B300 group"
                      >
                        Discover Now
                        <ArrowCircleRight className="icon-24" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default ServicesTwo;
