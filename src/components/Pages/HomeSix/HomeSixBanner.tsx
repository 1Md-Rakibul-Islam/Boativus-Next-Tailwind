// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// My modules

import img1 from "@public/media/images/home6-banner1.png";
import img2 from "@public/media/images/home6-banner2.png";
import img3 from "@public/media/images/home6-banner3.png";
import { ArrowCircleRight } from "@phosphor-icons/react";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";
import Image from "next/image";

const HomeSixBanner = () => {
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
    <section className="home-6-hero-banner relative bg-[#131F48]">
      <div className="relative z-[1] w-full lg:pt-40 md:pt-36 pt-32 4xl:px-[120px] 3xl:px-[100px] xxl:px-20 xl:px-12 md:px-10 sm: px-5">
        <div className="grid xxl:grid-cols-12 lg:grid-cols-2 grid-cols-1 my-gap-24">
          <div className="xxl:col-start-1 3xl:col-end-5 xxl:col-end-6 lg:mb-0 gap-mb-64 lg:gap-mt-64">
            <div className="sm:text-left text-center">
              <FadeUp>
                <h4 className="text-32 text-brown-B300 gap-mb-16 ">
                  We do more than diesel repair.
                </h4>
              </FadeUp>
              <FadeDown>
                <h1 className="gap-mb-32 text-76 text-white gap-mb-24">
                  One-stop for all br your{" "}
                  <br className="lg:hidden sm:block  hidden" /> vessel needs!
                </h1>
              </FadeDown>
              <FadeUp>
                <p className="gap-mb-40 text-18 text-white gap-mb-40 ">
                  Experience yacht care and customer service like never before
                  from Boativus, your trusted yacht care company.
                </p>
              </FadeUp>
            </div>
            <FadeUp className="flex-centerY sm:flex-row flex-col my-gap-32 ">
              <a
                href="#"
                className="btn text-white hover:text-blue-B900 bg-blue-B900 hover:bg-brown-B300 flex-centerY gap-2"
              >
                Get to know more
                <ArrowCircleRight className="icon-24" />
              </a>

              <div className="text-16 text-white sm:text-left text-center ">
                <a href="tel:+6845550102">(684) 555-0102</a>
                <div className="w-[148px] h-[1px] bg-white my-2"></div>
                <a href="mailto:example@mail.com">example@mail.com</a>
              </div>
            </FadeUp>
          </div>
          <div className="3xl:col-start-6 xxl:col-start-7 xxl:col-end-13">
            <Swiper
              direction={"vertical"}
              loop={true}
              speed={2500}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              slidesPerView={1}
              centeredSlides={false}
              spaceBetween={30}
              grabCursor={true}
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  // Add leading zeros to the index
                  const pageNumber = ("0" + (index + 1)).slice(-2);
                  return (
                    '<span class="' + className + '">' + pageNumber + "</span>"
                  );
                },
                el: ".swiper-pagination",
              }}
              modules={[FreeMode, Autoplay, Pagination]}
              className="swiper w-full home-6-hero-banner-carousel md:max-h-[700px] max-h-[380px]"
            >
              {bannerSlider?.map((item, idx) => (
                <SwiperSlide key={idx} className="swiper-slide">
                  <Image
                    className="w-full h-full object-cover"
                    src={item?.image}
                    alt="img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="z-[2] relative xl:py-16 lg:py-14 md:py-12 sm:py-10 py-9">
              <div className="relative swiper-pagination flex items-end flex-col sm:gap-4 gap-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:block hidden w-[12%] absolute right-0 top-0 bottom-0 bg-[#1B2D68]"></div>
    </section>
  );
};

export default HomeSixBanner;
