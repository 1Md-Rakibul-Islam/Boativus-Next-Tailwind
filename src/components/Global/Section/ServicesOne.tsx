// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

import { ArrowCircleRight, Star } from "@phosphor-icons/react";
import { services } from "@public/data/services";
import Link from "next/link";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";
// My modules

interface sectionHeaderType {
  bgClasses: string;
  title: string;
  subTitle: string;
  details: string;
}

const ServicesOne = ({
  sectionStyles,
}: {
  sectionStyles?: sectionHeaderType;
}) => {
  return (
    <section
      className={`${
        sectionStyles && sectionStyles?.bgClasses
      } our-services section-py relative overflow-hidden `}
    >
      <div className="relative">
        <FadeUp className="container text-center gap-mb-64">
          <h5
            className={`${
              sectionStyles && sectionStyles?.subTitle
            } text-24 text-blue-B50 gap-mb-16 `}
          >
            Our Services
          </h5>
          <h2
            className={`${
              sectionStyles && sectionStyles?.title
            } text-57 gap-mb-24`}
          >
            Services we provide
          </h2>
          <p
            className={`${
              sectionStyles && sectionStyles?.details
            } text-18 text-blue-B70`}
          >
            We will make your yachting experience truly unforgettable.
          </p>
        </FadeUp>

        <FadeUp className="px-1">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            centeredSlides={true}
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
                slidesPerView: 3,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              480: {
                slidesPerView: 2,
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
            modules={[FreeMode, Autoplay, Pagination, Navigation]}
            className="lg:pb-[30px] md:pb-7 sm:pb-6 pb-5"
          >
            {services?.slice(0, 4)?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative">
                  <div className="relative group">
                    <Image
                      className="w-full max-h-[768px] h-full"
                      src={item?.image}
                      alt="service"
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 lg:bottom-16 md:bottom-14 sm:bottom-12 bottom-10 text-center z-[1] flex-center flex-col">
                      <div className="flex-center gap-2 mb-2">
                        {Array.from({ length: item?.rating || 0 })?.map(
                          (_, idx) => (
                            <Star
                              key={idx}
                              className="text-warning-2"
                              width={20}
                              weight="fill"
                            />
                          )
                        )}
                      </div>
                      <h5 className="text-24 text-white gap-mb-24">
                        Adventure Trip
                      </h5>
                      <Link
                        href={`/yachts/${item?.id}`}
                        className="text-white flex-centerY gap-2.5 translate-y-[1000px] group-hover:translate-y-0 my-transition"
                      >
                        Book now
                        <ArrowCircleRight className="ph ph-arrow-circle-right text-xl" />
                      </Link>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,17,56,0.00)_19.26%] to-[rgba(6,17,56,0.81)_89.31%]"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </FadeUp>
      </div>
    </section>
  );
};

export default ServicesOne;
