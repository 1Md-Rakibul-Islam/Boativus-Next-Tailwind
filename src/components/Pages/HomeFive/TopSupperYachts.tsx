"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";
// My modules

import { yachts } from "@public/data/yachts";
import { ArrowCircleRight } from "@phosphor-icons/react";
import Link from "next/link";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";

const TopSupperYachts = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="section-py bg-white ">
      <div className="container">
        <FadeUp className="text-center gap-mb-64">
          <h2 className="text-57 text-blue-B900 gap-mb-16 ">
            Discover the Top Super <br className="hidden md:block" /> yachts for
            Sale
          </h2>
          <p className="text-18 text-blue-B90 ">
            A curated selection of the finest superyachts available for sale
            around the world.
          </p>
        </FadeUp>
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={24}
          speed={2500}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          centeredSlides={false}
          breakpoints={{
            1400: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
          }}
          modules={[FreeMode, Autoplay]}
          className="super-yachts-carousel px-1 lg:pb-10 md:pb-8 sm:pb-7 pb-6 "
        >
          {yachts?.slice(7, 11)?.map((item, idx) => (
            <SwiperSlide key={idx} className="swiper-slide">
              <div className="relative">
                <Image
                  className="w-full lg:pb-16 md:pb-14 sm:pb-12 pb-10"
                  src={item?.image[0]}
                  alt="img"
                />
                <div className="absolute sm:left-auto left-0 right-0 bottom-0 p-24px bg-white">
                  <div className="flex-centerY gap-2 text-18 text-blue-B200 font-normal pb-2 border-b border-[#DFE0E5] gap-mb-24">
                    <span>{item?.length}&ldquo;</span>.
                    <span>{item?.size}m</span>.<span>Turquoise</span>.
                    <span>{currentYear}</span>
                  </div>
                  <h5 className="text-18 font-semibold text-blue-B900 gap-mb-24">
                    Turquoise €{item?.price}
                  </h5>
                  <Link
                    href={`/yachts/${item?.id}`}
                    className="text-brown-B300 hover:text-blue-B900 text-18 font-semibold flex-centerY gap-2.5 my-transition"
                  >
                    Buy now
                    <ArrowCircleRight width={20} height={20} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex-center">
          <Link
            href="/sell"
            className="btn flex-centerY gap-2 text-white hover:text-blue-B900 bg-blue-B700 hover:bg-brown-B300 group"
          >
            Yachts for Sale
            <ArrowCircleRight className="icon-24" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopSupperYachts;
