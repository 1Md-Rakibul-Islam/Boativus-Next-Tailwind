import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

// My modules
import { ArrowCircleRight, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { services } from "@public/data/services";
import Link from "next/link";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";
// Import Swiper React components

const ServicesThree = () => {
  const servicesThreeData = services?.slice(10, 16);
  return (
    <section className="our-services-3 section-py relative overflow-hidden bg-white">
      <div className="relative">
        <div className="container gap-mb-64 xl:grid grid-cols-12 items-center">
          <FadeUp className="xl:col-span-10 xl:text-left text-center">
            <h5 className="text-24 text-brown-B300 gap-mb-16">
              Fast, reliable and quality yacht repair services
            </h5>
            <h2 className="text-57 text-blue-B900 gap-mb-24">
              We're the Only Yacht Care <br className="md:block hidden" />
              Company You Need
            </h2>
            <p className="text-18 text-blue-B300">
              Boativus has extensive expertise and experience in yacht repair,
              maintenance, and <br className="md:block hidden" /> cleaning — now
              accessible by all yacht owners.
            </p>
          </FadeUp>
          <div className="xl:col-span-2 xl:block hidden">
            <Link
              href="/pricing-plans"
              className="btn text-white hover:text-blue-B900 bg-blue-B900 hover:bg-brown-B300 flex-center whitespace-nowrap gap-2"
            >
              Choose a plan
              <ArrowCircleRight className="icon-24" />
            </Link>
          </div>
        </div>
        <div className="sm:mx-0 mx-5">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            breakpoints={{
              1400: {
                slidesPerView: 3.8,
                centeredSlides: true,
              },
              1200: {
                slidesPerView: 3.8,
                centeredSlides: true,
              },
              991: {
                slidesPerView: 3.4,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2.4,
                centeredSlides: true,
              },
              480: {
                slidesPerView: 1.8,
                centeredSlides: true,
              },
              0: {
                slidesPerView: 1,
                centeredSlides: false,
              },
            }}
            navigation={{
              nextEl: ".btn-next-services-3",
              prevEl: ".btn-prev-services-3",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            modules={[FreeMode, Autoplay, Navigation, Pagination]}
            className="xl:mb-0 gap-mb-40"
          >
            {servicesThreeData?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative group">
                  <div className="overflow-hidden">
                    <Image
                      className="w-full 3xl:h-[558px] xxl:h-[458px] h-[358px] object-cover group-hover:scale-110 my-transition-2"
                      src={item?.image}
                      alt="service"
                    />
                  </div>
                  <div className="translate-y-full group-hover:translate-y-0 my-transition-2 absolute bottom-0 left-0 right-0 bg-[url('/media/images/repair-service-shape.svg')] bg-no-repeat bg-bottom bg-cover px-32px py-40px xl:pt-[100px] lg:pt-[90px] pt-20 w-full h-[246px]">
                    <h4 className="text-32 text-blue-B900 gap-mb-16">
                      {item?.title}
                    </h4>
                    <p className="text-18 text-blue-B300">{item?.details}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="relative z-10 bg-white xl:pt-14 lg:pt-10 md:pt-9 sm:pt-8 pt-14">
              <div className="container flex-centerY justify-between">
                <div className="sm:flex-centerY hidden gap-4">
                  <button className="btn-next-services-3 text-brown-B300 hover:text-blue-B900 my-transition md:w-[60px] md:h-[60px] sm:w-12 sm:h-12 w-10 h-10 flex-center">
                    <CaretLeft className="icon-24" />
                  </button>
                  <span className="icon-24 text-brown-B300">/</span>
                  <button className="btn-prev-services-3 text-brown-B300 hover:text-blue-B900 my-transition md:w-[60px] md:h-[60px] sm:w-12 sm:h-12 w-10 h-10 flex-center">
                    <CaretRight className="icon-24" />
                  </button>
                </div>
                <div className="swiper-pagination"></div>
                <div className="sm:flex-centerY hidden gap-4 text-18 text-brown-B400">
                  <span>00{servicesThreeData?.length}</span>
                </div>
              </div>
            </div>
          </Swiper>
          <div className="xl:hidden flex-center">
            <Link
              href="/pricing-plans"
              className="btn text-white hover:text-blue-B900 bg-blue-B900 hover:bg-brown-B300 inline-flex items-center whitespace-nowrap gap-2"
            >
              Choose a plan
              <ArrowCircleRight className="icon-24" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesThree;
