// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight, Check } from "@phosphor-icons/react";
// My modules
import img1 from "@public/media/images/home3-hero-banner1.png";
import img2 from "@public/media/images/home3-hero-banner2.png";
import img3 from "@public/media/images/home3-hero-banner3.png";
import Link from "next/link";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";

const HomeThreeBanner = () => {
  const bannerSlider = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
  ];
  return (
    <section className="home-3-hero-banner">
      <div className="grid grid-cols-12 items-center my-gap-24 bg-blue-B900">
        <div className="3xl:col-span-5 lg:col-span-6 col-span-12 xxl:px-16 xl:px-12 lg:px-11 md:px-10 sm:px-8 px-6 xl:py-[200px] lg:pt-[180px] lg:pb-[80px] md:pt-[160px] sm:pt-[140px] pt-[120px] xl:pb-[214px] md:pb-20 sm:pb-[60px] pb-10">
          <FadeUp>
            <h1 className="text-76 text-white gap-mb-32 ">
              Boat Rentals and Yacht{" "}
              <br className="lg:hidden sm:block hidden" />
              Charters Worldwide
            </h1>
          </FadeUp>
          <FadeUp>
            <p className="text-24 font-normal text-white gap-mb-16 ">
              30,000 boats • Hourly, Daily, Weekly • Captain optional
            </p>
          </FadeUp>
          <FadeUp>
            <ul className="grid md:gap-y-4 sm:gap-y-3 gap-y-2.5 text-white gap-mb-40 ">
              <li className="flex-centerY gap-2">
                <Check className="icon-16 text-brown-B300" />
                <span className="text-18 font-semibold">
                  Best price guarante.
                </span>
              </li>
              <li className="flex-centerY gap-2">
                <Check className="icon-16 text-brown-B300" />
                <span className="text-18 font-semibold">
                  Largest inventory.
                </span>
              </li>
              <li className="flex-centerY gap-2">
                <Check className="icon-16 text-brown-B300" />
                <span className="text-18 font-semibold">
                  24/7 customer service.
                </span>
              </li>
            </ul>
            <Link
              href="/yachts"
              className="btn bg-blue-B800 hover:bg-brown-B300 text-white hover:text-blue-B900 "
            >
              Book now
            </Link>
          </FadeUp>
        </div>
        <div className="3xl:col-span-7 lg:col-span-6 col-span-12 h-full">
          <div className="swiper w-full home-3-hero-banner-carousel">
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
                nextEl: ".btn-next-home-3-hero-banner",
                prevEl: ".btn-prev-home-3-hero-banner",
              }}
              pagination={{
                clickable: true,
                type: "fraction",
                el: ".swiper-pagination",
              }}
              modules={[FreeMode, Autoplay, Navigation, Pagination]}
            >
              {bannerSlider?.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <Image
                    className="w-full object-cover xl:h-[1082px] lg:h-full md:h-[520px] sm:h-[380px] h-[300px]"
                    src={item?.image}
                    alt="img"
                  />
                </SwiperSlide>
              ))}
              <div className="absolute lg:bottom-6 md:bottom-5 sm:bottom-4 bottom-3.5 lg:left-6 md:left-5 sm:left-4 left-3.5 p-24px bg-[rgba(6,17,56,0.46)] z-[2]">
                <div className="relative flex-centerY my-gap-28">
                  <button
                    className="btn-prev-home-3-hero-banner flex-center sm:w-10 sm:h-10 w-8 h-8 text-white pr-2 border-r border-white hover:text-brown-B300 my-transition relative z-[11]"
                    aria-label="Previous slide"
                  >
                    <ArrowLeft
                      width={32}
                      className="sm:text-[32px] text-2xl sm:p-2 p-1.5"
                    />
                  </button>
                  <div className="px-[60px]">
                    <div className="swiper-pagination"></div>
                  </div>
                  <button
                    className="btn-next-home-3-hero-banner flex-center sm:w-10 sm:h-10 w-8 h-8 text-white pl-2 border-l border-white hover:text-brown-B300 my-transition relative z-[10]"
                    aria-label="Next slide"
                  >
                    <ArrowRight className="sm:text-[32px] text-2xl sm:p-2 p-1.5" />
                  </button>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeThreeBanner;
