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
import { CaretLeft, CaretRight, Play, Star } from "@phosphor-icons/react";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

const TestimonialsThree = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="relative z-[1] overflow-hidden bg-[url('../media/images/testimonialBG5.png')] bg-no-repeat bg-cover">
      <div className="relative section-pt container">
        <div className="grid grid-cols-12 md:justify-start justify-center">
          <div className="xxl:col-span-6 xl:col-span-5 lg:col-span-4 md:col-span-3 col-span-12"></div>
          <div className="relative xxl:col-span-6 xl:col-span-7 lg:col-span-8 md:col-span-9 col-span-12 bg-blue-B900 p-32px ">
            <Swiper
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              spaceBetween={24}
              centeredSlides={false}
              slidesPerView={1}
              navigation={{
                nextEl: ".btn-next",
                prevEl: ".btn-prev",
              }}
              modules={[FreeMode, Autoplay, Navigation]}
              className="pb-5"
            >
              {testimonialsOne?.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div>
                    <img
                      className="sm:w-20 sm:h-20 w-16 h-16 rounded-full object-fill gap-mb-16"
                      src={item?.userImage}
                      alt="user"
                    />
                    <div className="flex-centerY sm:gap-2 gap-1.5 gap-mb-32">
                      {Array.from({ length: item?.rating || 0 })?.map(
                        (_, idx) => (
                          <Star
                            key={idx}
                            weight="fill"
                            className="icon-20 text-warning-2"
                          />
                        )
                      )}
                    </div>
                    <p className="text-18 text-blue-B20 gap-mb-32">
                      {item?.details}
                    </p>
                    <h5 className="text-24 text-white gap-mb-16">
                      {item?.userName}
                    </h5>
                    <div className="flex-centerY divide-x divide-white text-18 gap-mb-40">
                      <span className="text-brown-B300 pr-6">
                        {item?.location}
                      </span>
                      <span className="text-white pl-6">{item?.publish}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute lg:bottom-6 md:bottom-5 sm:bottom-4 bottom-3.5 lg:right-6 md:right-5 sm:right-4 right-3.5 z-[2]">
              <div className="relative flex-centerY my-gap-28">
                <button
                  className="btn-prev flex-center rounded-full sm:w-10 sm:h-10 w-8 h-8 text-white border border-white hover:border-brown-B300 my-transition"
                  aria-label="Previous slide"
                >
                  <CaretLeft className="text-base" />
                </button>
                <button
                  className="btn-next flex-center rounded-full sm:w-10 sm:h-10 w-8 h-8 text-white border border-white hover:border-brown-B300 my-transition"
                  aria-label="Next slide"
                >
                  <CaretRight className="text-base" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-14 p-24px bg-white md:flex hidden  items-center gap-4 -rotate-90">
          <button
            onClick={() => setOpen(true)}
            className=" popup-video btn_effect"
          >
            <Play weight="fill" className="text-white text-xl" />
          </button>
          <h5 className="text-18 text-blue-B900">Watch Video</h5>
        </div>
      </div>
      <div className="absolute top-0 right-0 p-24px bg-white flex md:hidden  items-center gap-4">
        <button
          onClick={() => setOpen(true)}
          className="popup-video btn_effect"
        >
          <Play weight="fill" className="text-white text-xl" />
        </button>
        <h5 className="text-18 text-blue-B900">Watch Video</h5>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="mqWUW6ypo6w"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default TestimonialsThree;
