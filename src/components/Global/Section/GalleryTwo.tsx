// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { galleryFive } from "../../../../dist/data/gallery";
// My modules

const GalleryTwo = () => {
  return (
    <section className="relative z-[1] bg-white">
      <div className="flex-center gap-mb-40 sm:my-gap-32 gap-2">
        <h5 className="text-24 text-blue-B900">Follow on Instagram</h5>
        <a
          href="#"
          className="btn p-2.5 text-white inline-flex items-center gap-2.5 group hover:text-blue-B900 bg-blue-B700 hover:bg-brown-B300"
        >
          Follow Now
          <ArrowCircleRight width={16} height={16} />
        </a>
      </div>
      <Swiper
        loop={true}
        slidesPerView={5}
        speed={6000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        centeredSlides={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 5,
          },
        }}
        modules={[FreeMode, Autoplay, Navigation]}
        className="gallery-carousel gallery4-slider"
      >
        {galleryFive?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img
              className="w-full lg:h-[278px] md:h-[240px] sm:h-[200px] h-[160px] object-cover"
              src={item?.image}
              alt="user"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GalleryTwo;
