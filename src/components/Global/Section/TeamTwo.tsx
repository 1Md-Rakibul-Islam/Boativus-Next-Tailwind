// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import { team } from "@public/data/team";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";
// My modules

const TeamTwo = ({ padding }: { padding?: string }) => {
  return (
    <section className="section-py relative overflow-hidden bg-white">
      <div className={`container relative z-[1] ${padding && padding}`}>
        <FadeUp className="text-center gap-mb-64">
          <h5 className="text-24 text-brown-B300 gap-mb-16">
            Our Skilled Team
          </h5>
          <h2 className="text-57 text-blue-B900 gap-mb-24">
            Meet our Skippers
          </h2>
          <p className="text-18 text-blue-B300">
            Boativus Yachts International is the result of a meeting of minds
            between some of the most authoritative,
            <br className="md:block hidden" />
            renowned and respected European brokers in the nautical and
            superyacht sales world.
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
          modules={[FreeMode, Autoplay]}
        >
          {team?.slice(6, 12)?.map((item, idx) => (
            <SwiperSlide key={idx} className="py-1">
              <div className="relative my-transition hover:border-brown-B350 border-transparent border-t  rounded-10 bg-white  bg-center bg-no-repeat">
                <div className="absolute lg:top-6 md:top-5 sm:top-4 top-3 lg:right-6 md:right-5 sm:right-4 right-3 flex flex-col sm:gap-2.5 gap-2 z-[1]">
                  <a
                    href="#"
                    className="flex-center sm:w-10 sm:h-10 w-9 h-9 rounded-full border bg-white hover:bg-blue-B900 border-brown-B350 hover:border-blue-B900 my-transition group"
                  >
                    <FacebookLogo className="text-2xl group-hover:text-white text-brown-B350 my-transition" />
                  </a>
                  <a
                    href="#"
                    className="flex-center sm:w-10 sm:h-10 w-9 h-9 rounded-full border bg-white hover:bg-blue-B900 border-brown-B350 hover:border-blue-B900 my-transition group"
                  >
                    <InstagramLogo className="text-2xl group-hover:text-white text-brown-B350 my-transition" />
                  </a>
                  <a
                    href="#"
                    className="flex-center sm:w-10 sm:h-10 w-9 h-9 rounded-full border bg-white hover:bg-blue-B900 border-brown-B350 hover:border-blue-B900 my-transition group"
                  >
                    <TwitterLogo className="text-2xl group-hover:text-white text-brown-B350 my-transition" />
                  </a>
                  <a
                    href="#"
                    className="flex-center sm:w-10 sm:h-10 w-9 h-9 rounded-full border bg-white hover:bg-blue-B900 border-brown-B350 hover:border-blue-B900 my-transition group"
                  >
                    <InstagramLogo className="text-2xl group-hover:text-white text-brown-B350 my-transition" />
                  </a>
                </div>
                <div className="bg-blue-B5">
                  <Image
                    className="w-full rounded-10 gap-mb-32"
                    src={item?.image}
                    alt="team"
                  />
                </div>
                <div className="text-center z-[10]">
                  <h5 className="text-24 text-blue-B900 sm:mb-2 mb-1.5">
                    {item?.title}
                  </h5>
                  <span className="text-18 text-blue-B200">
                    {item?.details}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamTwo;
