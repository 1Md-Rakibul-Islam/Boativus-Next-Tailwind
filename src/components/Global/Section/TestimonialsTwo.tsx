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
import { CaretLeft, CaretRight, Star } from "@phosphor-icons/react";

const TestimonialsTwo = ({ bgImage }: { bgImage: string }) => {
  return (
    <section className={`${bgImage} bg-no-repeat bg-cover relative z-[1] `}>
      <div className="section-py container">
        <div className="grid grid-cols-12 md:justify-start justify-center">
          <div className="relative xxl:col-span-6 xl:col-span-7 lg:col-span-8 md:col-span-9 col-span-12 bg-blue-B900 p-32px">
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
                            width={20}
                            className="text-warning-2"
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
                  className="btn-slider btn-prev flex-center rounded-full sm:w-10 sm:h-10 w-8 h-8 text-white border border-white hover:border-brown-B300 my-transition"
                  aria-label="Previous slide"
                >
                  <CaretLeft width={20} />
                </button>
                <button
                  className="btn-slider btn-next flex-center rounded-full sm:w-10 sm:h-10 w-8 h-8 text-white border border-white hover:border-brown-B300 my-transition"
                  aria-label="Next slide"
                >
                  <CaretRight width={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsTwo;
