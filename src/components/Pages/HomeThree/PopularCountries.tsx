// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
// My modules
import { Link } from "react-router-dom";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { countries } from "@public/data/countries";
import FadeUp from "@/motion/FadeUp";

const PopularCountries = () => {
  return (
    <section className="popular-countries relative bg-white">
      <div className="container relative">
        <div className="flex justify-between gap-mb-64">
          <FadeUp className="sm:text-left text-center">
            <h5 className="text-24 text-brown-B300 gap-mb-16">
              Select your country
            </h5>
            <h2 className="text-57 text-blue-B900 gap-mb-24">
              Popular countries
            </h2>
            <p className="text-18 text-blue-B300">
              Lorem ipsum dolor sit amet consectetur. Vitae justo rhoncus ut sed
              pellentesque.
            </p>
          </FadeUp>
          <div className="lg:flex hidden items-end">
            <Link
              to="/yachts"
              className="btn bg-blue-B800 hover:bg-brown-B300 text-white hover:text-blue-B900 flex-centerY gap-2 "
            >
              View All
              <ArrowCircleRight width={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative max-lg:container xxl:ml-[calc((100%-1296px)/2)] xl:ml-[calc((100%-1120px)/2)] lg:ml-[calc((100%-940px)/2)] ">
        <div className="w-full px-1 xl:pb-16 lg:pb-14 md:pb-12 sm:pb-10 pb-9">
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
            scrollbar={{
              el: ".swiper-scrollbar",
              hide: false,
            }}
            modules={[FreeMode, Autoplay, Navigation, Pagination, Scrollbar]}
            className="swiper-wrapper"
          >
            {countries?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative group">
                  <img
                    className="w-full object-cover max-h-[768px] h-full"
                    src={item?.image}
                    alt="service"
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 lg:bottom-16 md:bottom-14 sm:bottom-12 bottom-10 text-center z-[1] flex-center flex-col">
                    <h6 className="text-18 text-white gap-2">
                      <span>{item?.yachts}+</span>yachts
                    </h6>
                    <h5 className="text-24 text-white gap-mb-24">
                      {item?.title}
                    </h5>
                    <Link
                      to={`/yachts/${item?.id}`}
                      className="text-white flex-centerY gap-2.5 translate-y-[1000px] group-hover:translate-y-0 my-transition"
                    >
                      Book now
                      <ArrowCircleRight />
                    </Link>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,17,56,0.00)_19.26%] to-[rgba(6,17,56,0.81)_89.31%]"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="container relative gap-mb-32">
          <div className="swiper-scrollbar swiper-scrollbar-horizontal"></div>
        </div>
        <div className="flex justify-center lg:hidden">
          <Link
            to="/yachts"
            className="btn bg-blue-B800 hover:bg-brown-B300 text-white hover:text-blue-B900 flex-centerY gap-2 "
          >
            View All
            <ArrowCircleRight className="icon-24" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCountries;
