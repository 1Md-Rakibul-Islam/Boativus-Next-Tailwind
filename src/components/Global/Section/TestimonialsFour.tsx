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
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";

const TestimonialsFour = () => {
  return (
    <section className="section-py bg-[url('/media/images/testimonialBG6.png')] bg-cover bg-center">
      <div className="container">
        <FadeUp className="text-center gap-mb-64">
          <h5 className="text-24 text-brown-B300 gap-mb-16">
            Our Testimonials
          </h5>
          <h2 className="text-57 text-white gap-mb-24">
            What Our Clients Say About <br className="md:block hidden" />
            Our Yachts
          </h2>
          <p className="text-18 text-white">
            Yacht Service is a professional marine network service provider.Our
            competent and reliable teams
            <br className="md:block hidden" />
            specialize in offering tailor-made, quality solutions.
          </p>
        </FadeUp>

        <div className="relative">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={false}
            navigation={{
              nextEl: ".btn-next-testimonial-6",
              prevEl: ".btn-prev-testimonial-6",
            }}
            modules={[FreeMode, Autoplay, Navigation]}
            className="max-w-[636px] testimonials-carousel-6 gap-mb-40"
          >
            {testimonialsOne?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex-center flex-col">
                  <Image
                    className="gap-mb-40"
                    src="/media/icons/arrow-two-icon.png"
                    alt="icon"
                  />
                  <p className="text-18 text-center text-blue-B20 gap-mb-40">
                    {item?.details}
                  </p>
                  <div className="flex-centerY gap-3">
                    <Image
                      className="md:w-12 md:h-12 sm:w-10 sm:h-10 w-8 h-8 rounded-full"
                      src={item?.userImage?.src}
                      alt="icon"
                    />
                    <div>
                      <h5 className="text-24 text-white">{item?.userName}</h5>
                      <h6 className="text-18 text-white">{item?.position}</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="lg:absolute top-1/2 -translate-y-1/2 w-full lg:block hidden">
            <div className="relative w-full flex-centerY justify-between my-gap-28">
              <button
                className="btn-prev-testimonial-6 flex-center rounded-full sm:w-10 sm:h-10 w-8 h-8 hover:text-blue-B900 text-brown-B300 border hover:border-brown-B300 hover:bg-brown-B300 border-brown-B300 my-transition cursor-pointer"
                aria-label="Previous slide"
              >
                <CaretLeft className="text-base" />
              </button>
              <button
                className="btn-next-testimonial-6 flex-center rounded-full sm:w-10 sm:h-10 w-8 h-8 hover:text-blue-B900 text-brown-B300 border hover:border-brown-B300 hover:bg-brown-B300 border-brown-B300 my-transition cursor-pointer"
                aria-label="Next slide"
              >
                <CaretRight className="text-base" />
              </button>
            </div>
          </div>
          <div className="lg:hidden block">
            <div className="relative w-full flex-centerY justify-center my-gap-28">
              <button
                className="btn-prev-testimonial-6 flex-center rounded-full sm:w-10 sm:h-10 w-8 h-8 hover:text-blue-B900 text-brown-B300 border hover:border-brown-B300 hover:bg-brown-B300 border-brown-B300 my-transition cursor-pointer"
                aria-label="Previous slide"
              >
                <CaretLeft className="text-base" />
              </button>
              <button
                className="btn-next-testimonial-6 flex-center rounded-full sm:w-10 sm:h-10 w-8 h-8 hover:text-blue-B900 text-brown-B300 border hover:border-brown-B300 hover:bg-brown-B300 border-brown-B300 my-transition cursor-pointer"
                aria-label="Next slide"
              >
                <CaretRight className="text-base" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsFour;
