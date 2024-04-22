"use client";

import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { yachtCategories } from "@public/data/yachtCategories";
import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";
// My modules

const YachtCategories = ({ cardStyle }: { cardStyle?: string }) => {
  return (
    <section className="bg-white section-py yacht-categories">
      <div className="container">
        <div className="text-center">
          <FadeDown>
            <h5 className="text-24 text-brown-B300 gap-mb-16">
              Choose yacht types
            </h5>
          </FadeDown>
          <FadeUp>
            <h2 className="text-57 text-blue-B800 gap-mb-24">
              Yacht categories
            </h2>
          </FadeUp>
          <FadeDown>
            <p className="text-18 text-blue-B300 gap-mb-64">
              Praesent pellentesque, lectus eget suscipit elementum, felis dolor
              <br className="sm:block hidden" />
              sodales eros, et laoreet nisi nibh id est.
            </p>
          </FadeDown>
        </div>
        <div className="yacht-categories-carousel px-1">
          <Swiper
            slidesPerView={6}
            loop={true}
            speed={500}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            centeredSlides={false}
            breakpoints={{
              1400: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              991: {
                slidesPerView: 4,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 18,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
            }}
            modules={[FreeMode, Autoplay, Navigation]}
            className="mySwiper"
          >
            {yachtCategories?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="swiper-slide py-1">
                  <Link
                    href={`/yachts`}
                    className={`${
                      cardStyle && cardStyle
                    } w-full h-full p-24px rounded-lg my-transition flex-center flex-col `}
                  >
                    <Image
                      className="min-w-fit max-w-16 gap-mb-16"
                      src={item?.image}
                      alt="img"
                    />
                    <h4 className="text-18 font-playfair font-semibold text-center text-blue-B900 sm:mb-2 mb-1.5">
                      {item?.title}
                    </h4>
                    <p className="text-18 text-center text-blue-B500">
                      {item?.availableYachts}+ yachts
                    </p>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default YachtCategories;
