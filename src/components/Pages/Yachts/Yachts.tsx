import FadeUp from "@/motion/FadeUp";
import {
  ArrowCircleRight,
  ArrowLeft,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { yachts } from "@public/data/yachts";
import Image from "next/image";
import Link from "next/link";

const Yachts = () => {
  // yachts slice
  const allYachts = yachts?.slice(11, 19);
  return (
    <section className="section-py bg-white">
      <div className="container">
        <FadeUp>
          <h2 className="text-57 text-blue-B900 text-center gap-mb-64">
            Most Popular Yachts
          </h2>
        </FadeUp>
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1 my-gap-24 gap-mb-60">
            {allYachts?.map((item, idx) => (
              <FadeUp
                key={idx}
                className="overflow-hidden relative group w-full"
              >
                <Image
                  className="w-full xl:h-[730px] lg:h-[620px] sm:h-[520px] h-[500px] min-h-fit object-cover group-hover:scale-110 my-transition"
                  src={item?.image[0]}
                  alt="blog"
                />
                <div className="absolute lg:left-5 md:left-4 left-3 top-0 bg-[url('/media/icons/priceRectangle.svg')] bg-no-repeat bg-cover">
                  <div className="relative pt-5 px-2.5 pb-12 text-center text-white">
                    <h5 className="text-24">${item?.price}</h5>
                    <span className="text-16">Per Hour</span>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 text-center z-[1] flex-center flex-col w-full">
                  <div className="p-24px w-full">
                    <div className="w-full sm:p-4 p-3 gap-mb-32 flex-centerY xxl:flex-row flex-col justify-between xl:gap-6 md:gap-4 gap-3 group-hover:bg-glass-1 bg-white  my-transition">
                      <div className="xxl:text-left text-center">
                        <h4 className="text-24 group-hover:text-white text-blue-B900 my-transition mb-2">
                          {item?.title}
                        </h4>
                        <h6 className="text-18 group-hover:text-white text-blue-B900 my-transition">
                          Capacity: <span>{item?.guests}</span>
                        </h6>
                      </div>
                      <Link
                        href={`/yachts/${item?.id}`}
                        className="text-18 group-hover:text-white text-blue-B900 my-transition flex-centerY gap-1 my-transition whitespace-nowrap"
                      >
                        Book now
                        <ArrowCircleRight className="text-xl" />
                      </Link>
                    </div>
                    <div className="flex justify-between items-center sm:divide-x divide-white text-16 text-white gap-mb-40">
                      <div className="w-full z-[1] text-left">
                        <div className="flex-centerY justify-center gap-2 gap-mb-16">
                          <Image
                            width={20}
                            height={20}
                            src="/media/icons/yachts-feachers-icon1.png"
                            alt="icon"
                          />
                          <h6 className="text-16 text-white">
                            Unlimited Drinks
                          </h6>
                        </div>
                        <div className="flex-centerY justify-center gap-2">
                          <Image
                            width={20}
                            height={20}
                            src="/media/icons/yachts-feachers-icon2.png"
                            alt="icon"
                          />
                          <h6 className="text-16 text-white">Crew Included</h6>
                        </div>
                      </div>
                      <div className="w-full z-[1] text-left">
                        <div className="flex-centerY justify-center gap-2 gap-mb-16">
                          <Image
                            width={20}
                            height={20}
                            src="/media/icons/yachts-feachers-icon3.png"
                            alt="icon"
                          />
                          <h6 className="text-16 text-white">
                            Jetski Available
                          </h6>
                        </div>
                        <div className="flex-centerY justify-center gap-2">
                          <Image
                            width={20}
                            height={20}
                            src="/media/icons/yachts-feachers-icon4.png"
                            alt="icon"
                          />
                          <h6 className="text-16 text-white">Live Chef</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,17,56,0.00)_19.26%] to-[rgba(6,17,56,0.81)_89.31%]"></div>
              </FadeUp>
            ))}
          </div>
          <div className="flex-center">
            <div className="flex-centerY my-gap-24">
              <button
                type="button"
                className="py-2 md:w-[88px] sm:w-[68px] w-12 flex-center bg-blue-B200 hover:bg-blue-B900 my-transition rounded-10"
              >
                <ArrowLeft className="ph ph-arrow-left icon-24 text-white" />
              </button>
              <div className="flex-centerY sm:gap-2 gap-1.5 text-24 font-semibold text-white">
                <button className="w-10 h-10 flex-center p-3 bg-blue-B900 my-transition rounded-10">
                  1
                </button>
                <button className="w-10 h-10 flex-center p-3 bg-blue-B900 my-transition rounded-10">
                  2
                </button>
                <button className="w-10 h-10 flex-center p-3 bg-blue-B900 my-transition rounded-10">
                  3
                </button>
                <button className="w-10 h-10 flex-center p-3 bg-blue-B700 my-transition rounded-10">
                  4
                </button>
              </div>
              <button
                type="button"
                className="py-2 md:w-[88px] sm:w-[68px] w-12 flex-center bg-blue-B200 hover:bg-blue-B900 my-transition rounded-10"
              >
                <ArrowRight className="ph ph-arrow-left icon-24 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Yachts;
