// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import {
  ArrowLeft,
  ArrowRight,
  FacebookLogo,
  InstagramLogo,
  TwitchLogo,
} from "@phosphor-icons/react";
import { team } from "@public/data/team";
import FadeUp from "@/motion/FadeUp";
// My modules

const OurTeamOne = () => {
  return (
    <section className="section-py relative overflow-hidden bg-white">
      <div className="container relative z-[1]">
        <FadeUp className="text-center gap-mb-64">
          <h5 className="text-24 text-brown-B300 gap-mb-16">Our Team</h5>
          <h2 className="text-57 text-blue-B900 gap-mb-24">Our Skilled Team</h2>
          <p className="text-18 text-blue-B300 gap-mb-64">
            Our skilled team combines expertise and passion, ensuring seamless
            execution and delivering exceptional
            <br className="md:block hidden" />
            results. Trust us to exceed your expectations.
          </p>
        </FadeUp>

        <Swiper
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          centeredSlides={false}
          breakpoints={{
            1400: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
          }}
          navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
          }}
          modules={[FreeMode, Autoplay, Navigation]}
          className="mySwiper px-1"
        >
          {team?.slice(0, 6)?.map((item, idx) => (
            <SwiperSlide key={idx} className="py-1">
              <div className="relative rounded-10 bg-warning w-full sm:h-[380px] h-[340px] bg-center bg-no-repeat">
                <div className="absolute lg:top-6 md:top-5 sm:top-4 top-3 lg:right-6 md:right-5 sm:right-4 right-3 flex flex-col sm:gap-2.5 gap-2 z-[1]">
                  <a
                    href={item?.social[0]}
                    className="flex-center sm:w-10 sm:h-10 w-9 h-9 rounded-full border hover:bg-blue-B900 hover:border-blue-B900 border-white my-transition group"
                  >
                    <FacebookLogo className="text-2xl text-white my-transition" />
                  </a>
                  <a
                    href={item?.social[1]}
                    className="flex-center sm:w-10 sm:h-10 w-9 h-9 rounded-full border hover:bg-blue-B900 hover:border-blue-B900 border-white my-transition group"
                  >
                    <InstagramLogo className="text-2xl text-white my-transition" />
                  </a>
                  <a
                    href={item?.social[2]}
                    className="flex-center sm:w-10 sm:h-10 w-9 h-9 rounded-full border hover:bg-blue-B900 hover:border-blue-B900 border-white my-transition group"
                  >
                    <TwitchLogo className="text-2xl text-white my-transition" />
                  </a>
                  <a
                    href={item?.social[3]}
                    className="flex-center sm:w-10 sm:h-10 w-9 h-9 rounded-full border hover:bg-blue-B900 hover:border-blue-B900 border-white my-transition group"
                  >
                    <InstagramLogo className="text-2xl text-white my-transition" />
                  </a>
                </div>
                <img
                  className="w-full h-full rounded-10"
                  src={item?.image}
                  alt="team"
                />
                <div className="absolute w-full pb-6 bottom-0 text-center z-[1]">
                  <h5 className="text-24 text-white sm:mb-2 mb-1.5">
                    {item?.title}
                  </h5>
                  <span className="text-18 text-blue-B40">{item?.details}</span>
                </div>
                <div className="absolute rounded-10 w-full h-full left-0 bottom-0 bg-gradient-to-b from-[rgba(6,17,56,0.00)_0%] to-[#061138_100%]"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full flex-center gap-mt-32">
          <div className="flex-centerY sm:gap-2 gap-1.5">
            <button
              className="btn-prev flex-center rounded-full sm:w-10 sm:h-10 w-8 h-8 text-blue-B300 hover:text-white border border-blue-B300 hover:border-blue-B800 hover:bg-[#0F1A3F] my-transition"
              aria-label="Previous slide"
            >
              <ArrowLeft className="sm:p-2 p-1.5" size={32} />
            </button>
            <button
              className="btn-next flex-center rounded-full sm:w-10 sm:h-10 w-8 h-8 text-blue-B300 hover:text-white border border-blue-B300 hover:border-blue-B800 hover:bg-[#0F1A3F] my-transition"
              aria-label="Next slide"
            >
              <ArrowRight className="sm:p-2 p-1.5" size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamOne;
