"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
// My modules
import { yachtsRental } from "@public/data/yachtsRental";
import Link from "next/link";
import { ArrowCircleRight } from "@phosphor-icons/react";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";

const YachtRental = () => {
  return (
    <section className="yacht-rental relative section-pt bg-white">
      <div className="relative gap-mb-32">
        <div className="container grid grid-cols-12 justify-between gap-mb-60">
          <FadeUp className="xl:col-span-6 md:col-span-8 col-span-12 md:text-left text-center">
            <h2 className="text-57 text-blue-B900 gap-mb-24 ">Yacht Rental</h2>
            <p className="text-18 text-[#7F8A99] ">
              Boativus provides luxury Yacht Rental locals and visitors! We
              manage an entire fleet of luxury yachts available for rental, with
              vessels ranging from .....
            </p>
          </FadeUp>
          <div className="xl:col-span-6 md:col-span-4 md:flex hidden justify-end items-end">
            <Link
              href="/blogs"
              className="btn bg-blue-B800 hover:bg-brown-B300 text-white hover:text-blue-B900"
            >
              View All Blogs
            </Link>
          </div>
        </div>

        <FadeUp className="relative max-lg:container xxl:ml-[calc((100%-1296px)/2)] xl:ml-[calc((100%-1120px)/2)] lg:ml-[calc((100%-940px)/2)] ">
          <div className="swiper w-full yacht-rental-carousel px-4 xl:pb-16 lg:pb-14 md:pb-12 sm:pb-10 pb-9">
            <Swiper
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              spaceBetween={24}
              slidesPerView={2.5}
              grabCursor={true}
              breakpoints={{
                1200: {
                  slidesPerView: 2.5,
                  spaceBetween: 24,
                },
                991: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 18,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                  centeredSlides: false,
                },
                0: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                  centeredSlides: false,
                },
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              modules={[FreeMode, Autoplay, Navigation, Pagination]}
              className="swiper-wrapper"
            >
              {yachtsRental?.map((item, idx) => (
                <SwiperSlide key={idx} className="gap-mb-64">
                  <div className="relative max-h-[698px] min-h-fit">
                    <Image
                      className="w-full md:min-h-[440px] min-h-[400px] h-full lg:pb-16 md:pb-14 sm:pb-12 pb-10"
                      src={item?.image}
                      alt="img"
                    />
                    <div className="absolute max-w-[526px] right-0 bottom-0 p-32px bg-white">
                      <h4 className="text-24 text-blue-B900 gap-mb-16">
                        {item?.title}
                      </h4>
                      <p className="text-18 text-blue-B300">{item?.details}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </FadeUp>
      </div>
      <div className="flex-center md:hidden">
        <Link
          href="/yachts"
          className="btn bg-blue-B800 hover:bg-brown-B300 text-white hover:text-blue-B900 flex-centerY gap-2 "
        >
          View All Blogs
          <ArrowCircleRight className="ph ph-calendar-check" />
        </Link>
      </div>
    </section>
  );
};

export default YachtRental;
