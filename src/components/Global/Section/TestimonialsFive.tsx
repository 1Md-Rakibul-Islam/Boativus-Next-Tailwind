"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
// My modules
import { testimonialsOne } from "@public/data/testimonials";
import { Star } from "@phosphor-icons/react";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";

const TestimonialsFive = () => {
  return (
    <section className="section-py bg-[url('/media/images/testimonialBG6.png')] bg-cover bg-center bg-blue-B900">
      <div className="relative">
        <FadeUp className="container text-center gap-mb-64">
          <h5 className="text-24 text-brown-B100 gap-mb-16">
            Our Testimonials
          </h5>
          <h2 className="text-57 text-white gap-mb-24">
            What Our Clients Say About Our <br className="md:block hidden" />
            Yachts
          </h2>
          <p className="text-18 text-blue-B70 gap-mb-64">
            Yacht Service is a professional marine network service provider.Our
            competent and reliable teams
            <br className="md:block hidden" />
            specialize in offering tailor-made, quality solutions.
          </p>
        </FadeUp>
        <Swiper
          loop={true}
          speed={1500}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={24}
          centeredSlides={true}
          breakpoints={{
            1400: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: true,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: true,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 18,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 1.8,
              spaceBetween: 18,
              centeredSlides: true,
            },
            520: {
              slidesPerView: 1.8,
              spaceBetween: 16,
              centeredSlides: true,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
              centeredSlides: true,
            },
          }}
          modules={[FreeMode, Autoplay, Navigation]}
          className="testimonials-carousel-7 xl:px-0 px-4"
        >
          {testimonialsOne?.map((item, idx) => (
            <SwiperSlide key={idx} className="swiper-slide bg-blue-B800">
              <div className="w-full min-h-fit max-h-full p-32px rounded-lg shadow-4 flex-center flex-col z-[1]">
                <div className="flex-centerY sm:gap-x-3 gap-x-2 gap-mb-32">
                  <Image
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden"
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
                <p className="text-18 text-center text-blue-B20 gap-mb-20">
                  {item?.details}
                </p>
                <div className="flex-center sm:gap-2 gap-1.5">
                  {Array.from({ length: item?.rating || 0 }).map((_, idx) => (
                    <Star
                      key={idx}
                      weight="fill"
                      className="icon-24 text-warning-2"
                    />
                  ))}
                </div>
              </div>
              <div>
                <Image
                  className="absolute right-[6%] top-[8%] sm:w-8 w-7 sm:h-w-8 h-7"
                  src="/media/icons/comma1.png"
                  alt="icon"
                />
                <Image
                  className="absolute left-[6%] bottom-[8%] sm:w-10 w-9 sm:h-10 h-9"
                  src="/media/icons/comma2.png"
                  alt="icon"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsFive;
