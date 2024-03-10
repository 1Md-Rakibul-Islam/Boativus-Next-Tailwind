// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

import { testimonialsOne } from "@public/data/testimonials";
import { ArrowLeft, ArrowRight, Star } from "@phosphor-icons/react";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";
// My modules

const TestimonialsOne = () => {
  return (
    <section className="section-py relative overflow-hidden bg-blue-B900">
      <div className="container relative z-[1]">
        <FadeUp className="text-center gap-mb-64">
          <h5 className="text-24 text-blue-B50 gap-mb-1">Our Testimonials</h5>
          <h2 className="text-57 text-white gap-mb-24 ">
            What Our Clients Say About Our <br className="md:block hidden" />
            Yachts
          </h2>
          <p className="text-18 text-blue-B70 gap-mb-64 ">
            Spectacular yachts, impeccable service. Clients rave about
            unforgettable journeys, luxury redefined. A truly
            <br className="md:block hidden" />
            extraordinary experience, exceeding expectations every time.
          </p>
        </FadeUp>
        <FadeUp className="px-1 gap-mb-64">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            centeredSlides={false}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 18,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 18,
              },
            }}
            navigation={{
              nextEl: ".btn-next",
              prevEl: ".btn-prev",
            }}
            modules={[FreeMode, Autoplay, Navigation]}
          >
            {testimonialsOne?.map((item, idx) => (
              <SwiperSlide key={idx} className="relative py-1">
                <div className="swiper-slide relative py-1">
                  <div className="bg-blue-B800 w-full h-full p-40px rounded-lg shadow-4 flex-center flex-col">
                    <div className="flex-center sm:gap-2 gap-1.5 gap-mb-32">
                      {Array.from({ length: item?.rating || 0 }).map(
                        (_, index) => (
                          <Star
                            key={index}
                            className="icon-20 text-warning-2"
                            weight="fill"
                          />
                        )
                      )}
                    </div>
                    <p className="text-18 text-center text-blue-B20 gap-mb-32">
                      {item?.details}
                    </p>
                    <div className="flex-centerY sm:gap-x-3 gap-x-2">
                      <Image
                        className="w-h-14 h-14 sm:w-[88px] sm:h-[88px] rounded-full overflow-hidden gap-mb-16"
                        src={item?.userImage}
                        alt="img"
                      />
                      <div className="text-left">
                        <h4 className="text-18 font-playfair font-semibold text-white sm:mb-2 -mt-1">
                          {item?.userName}
                        </h4>
                        <span className="text-16 text-blue-B80">
                          {item?.position}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      className="absolute left-[4%] top-[5%] sm:w-[44px] w-9 sm:h-[44px] h-9"
                      src="/media/icons/carousel-errow.svg"
                      alt="icon"
                    />
                    <Image
                      className="absolute right-[4%] bottom-[5%] sm:w-[44px] w-9 sm:h-[44px] h-9"
                      src="/media/icons/carousel-errow.svg"
                      alt="icon"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeUp>
        <div className="w-full flex-center">
          <div className="flex-centerY sm:gap-2 gap-1.5">
            <button
              className="btn-prev flex-center rounded-full sm:w-10 sm:h-10 w-8 h-8 text-blue-B300 hover:text-white border border-blue-B300 hover:border-blue-B800 hover:bg-[#0F1A3F] my-transition"
              aria-label="Previous slide"
            >
              <ArrowLeft width={24} />
            </button>
            <button
              className="btn-next flex-center rounded-full sm:w-10 sm:h-10 w-8 h-8 text-blue-B300 hover:text-white border border-blue-B300 hover:border-blue-B800 hover:bg-[#0F1A3F] my-transition"
              aria-label="Next slide"
            >
              <ArrowRight width={24} />
            </button>
          </div>
        </div>
      </div>
      <Image
        draggable="false"
        className="xxl:w-[400px] xxl:h-[400px] md:w-[300px] md:h-[300px] md:block hidden absolute -left-[8%] -bottom-28 animate-spin-slow opacity-40"
        src="/media/icons/gallery-star-cercel.png"
        alt="img"
      />
      <Image
        draggable="false"
        className="xxl:w-[400px] xxl:h-[400px] md:w-[320px] md:h-[320px] md:block hidden absolute -right-[9%] -top-32 animate-spin-slow opacity-40"
        src="/media/icons/gallery-star-cercel.png"
        alt="img"
      />
    </section>
  );
};

export default TestimonialsOne;
