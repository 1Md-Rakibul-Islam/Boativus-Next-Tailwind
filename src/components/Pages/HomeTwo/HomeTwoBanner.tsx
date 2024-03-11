"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
// My modules

import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

import img1 from "@public/media/images/home3-hero-banner1.png";
import img2 from "@public/media/images/home3-hero-banner2.png";
import img3 from "@public/media/images/home3-hero-banner3.png";
import Link from "next/link";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";
import FadeLeft from "@/motion/FadeLeft";
import FadeRight from "@/motion/FadeRight";
import Image from "next/image";

const HomeTwoBanner = () => {
  const bannerSlider = [
    {
      id: 1,
      title: "",
      image: img1,
      details: "",
    },
    {
      id: 2,
      title: "",
      image: img2,
      details: "",
    },
    {
      id: 3,
      title: "",
      image: img3,
      details: "",
    },
  ];
  return (
    <section className="home-3-hero-banner bg-blue-B900">
      <div className="">
        <div className="grid grid-cols-12 items-center my-gap-24">
          <div className="3xl:col-span-4 sm:col-span-4 col-span-12 md:block hidden xxl:px-16 xl:px-12 lg:px-11 md:px-10 sm:px-8 px-6 xl:py-[200px] lg:pt-[180px] lg:pb-[80px] md:pt-[160px] sm:pt-[140px] pt-[120px] xl:pb-[214px] md:pb-20 sm:pb-[60px] pb-10">
            <div className="absolute 3xl:left-10 xxl:left-8 lg:left-5 left-0 xl:bottom-0 lg:bottom-1/2 lg:top-auto top-0 xl:translate-y-0 translate-y-1/2 hidden lg:flex flex-col gap-4 z-10 items-center justify-center">
              <div className="w-full h-full flex flex-col items-center my-gap-32 pb-10">
                <FadeDown>
                  <h2 className="text-16 text-slate-300 -rotate-90">
                    Follow Us
                  </h2>
                </FadeDown>
                <div className="w-24 h-[1px] bg-white -rotate-90 mt-16 mb-11"></div>
                <FadeUp className="flex flex-col gap-4">
                  <a
                    href="#"
                    className="icon-24 text-[#6B788E] hover:text-white my-transition block"
                  >
                    <FacebookLogo weight="fill" />
                  </a>
                  <a
                    href="#"
                    className="icon-24 text-[#6B788E] hover:text-white my-transition block"
                  >
                    <TwitterLogo weight="fill" />
                  </a>
                  <a
                    href="#"
                    className="icon-24 text-[#6B788E] hover:text-white my-transition block"
                  >
                    <LinkedinLogo weight="fill" />
                  </a>
                  <a
                    href="#"
                    className="icon-24 text-[#6B788E] hover:text-white my-transition block"
                  >
                    <InstagramLogo weight="fill" />
                  </a>
                </FadeUp>
              </div>
            </div>
            <div className="relative">
              <Image
                className="xxl:pt-[120px] xl:pt-[160px] lg:pt-[80px] w-[466px] h-auto absolute top-[52%] lg:left-1/2 right-0 -translate-y-1/2 z-[20]"
                src="/media/images/home2-banner-featur.png"
                alt="img"
              />
            </div>
          </div>
          <div className="3xl:col-span-8 md:col-span-8 col-span-12">
            <Swiper
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              spaceBetween={24}
              slidesPerView={1}
              centeredSlides={true}
              grabCursor={true}
              navigation={{
                nextEl: ".btn-next",
                prevEl: ".btn-prev",
              }}
              pagination={{
                clickable: true,
                type: "fraction",
                el: ".swiper-pagination",
              }}
              modules={[FreeMode, Autoplay, Navigation, Pagination]}
              className="swiper w-full home-3-hero-banner-carousel"
            >
              {bannerSlider?.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative w-full">
                    <Image
                      className="w-full object-fill xxl:h-[1082px] xl:h-[820px] lg:h-[820px] md:h-[580px] sm:h-[520px] h-[380px]"
                      src={item?.image}
                      alt=""
                    />
                    <div className="absolute inset-0 bg-[rgba(6,17,56,0.50)]"></div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="sm:absolute bottom-0 right-0 p-24px bg-[rgba(6,17,56,0.46)] z-20">
                <div className="relative flex-centerY sm:justify-start justify-center my-gap-28">
                  <button
                    className="btn-prev flex-center sm:w-10 sm:h-10 w-8 h-8 text-white pr-2 border-r border-white hover:text-brown-B300 my-transition relative z-[11]"
                    aria-label="Previous slide"
                  >
                    <ArrowLeft weight="fill" width={40} />
                  </button>
                  <div className="px-[60px]">
                    <div className="swiper-pagination"></div>
                  </div>
                  <button
                    className="btn-next flex-center sm:w-10 sm:h-10 w-8 h-8 text-white pl-2 border-l border-white hover:text-brown-B300 my-transition relative z-[10]"
                    aria-label="Next slide"
                  >
                    <ArrowRight weight="fill" width={40} />
                  </button>
                </div>
              </div>
              <div className="absolute 3xl:left-[18%] lg:left-[14%] p-32px py-0 bottom-1/2 translate-y-1/2 z-20">
                <div className="flex gap-[84px]">
                  <div className="sm:text-left text-center">
                    <FadeLeft>
                      <h1 className="text-76 text-white gap-mb-32  xxl:pt-0 xl:pt-32 lg:pt-0 sm:pt-12 ">
                        Boat Rentals and Yacht
                        <br className="lg:block md:hidden sm:block hidden" />
                        Charters Worldwide
                      </h1>
                    </FadeLeft>
                    <FadeRight>
                      <p className="text-24 font-normal text-white gap-mb-40 ">
                        Boativus is a place for those who are looking for the
                        top-notch yacht charters.
                      </p>
                    </FadeRight>
                    <Link
                      href="/buy-yacht"
                      className="btn bg-blue-B800 hover:bg-brown-B300 text-white hover:text-blue-B900"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoBanner;
