import FadeUp from "@/motion/FadeUp";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { yachts } from "@public/data/yachts";
import Link from "next/link";

const BestRatedYachts = () => {
  const ratedYachts = yachts?.filter(
    (yacht) => yacht?.category === "best rated"
  );

  return (
    <section className="section-py bg-blue-B900">
      <div className="container relative">
        <div className="flex justify-between gap-mb-60">
          <FadeUp className="sm:text-left text-center">
            <h5 className="text-24 text-brown-B200 gap-mb-16 ">
              Luxury yacht and Best Rated
            </h5>
            <h2 className="text-57 text-white gap-mb-24">
              Find the Best Boat <br className="sm:block hidden " /> Rental for
              You
            </h2>
          </FadeUp>
          <div className="md:flex hidden items-end">
            <Link
              href="/blogs"
              className="btn bg-blue-B800 hover:bg-brown-B300 my-transition text-white hover:text-blue-B900"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 my-gap-24 gap-mb-40">
          {ratedYachts?.map((item, idx) => (
            <FadeUp key={idx} className="overflow-hidden">
              <div className="relative group w-full">
                <img
                  className="w-full sm:h-[649px] h-[460px] min-h-fit group-hover:scale-110 my-transition"
                  src={item?.image[0]}
                  alt="yachts"
                />
                <div className="absolute lg:left-5 md:left-4 left-3 top-0 bg-[url('/media/icons/priceRectangle.svg')] bg-no-repeat bg-cover">
                  <div className="relative pt-5 px-2.5 pb-12 text-center text-white">
                    <h5 className="text-24">${item?.price}</h5>
                    <span className="text-16">Per Hour</span>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 px-4 bottom-0 text-center z-[1] flex-center flex-col w-full">
                  <div className="px-32-py-40px w-full">
                    <div className="w-full p-24px gap-mb-32 flex-centerY xxl:flex-row flex-col justify-between my-gap-24 group-hover:bg-glass-1 bg-white  my-transition">
                      <h4 className="text-24 group-hover:text-white text-blue-B900 my-transition">
                        {item?.title}
                      </h4>
                      <Link
                        href={`/yachts/${item?.id}`}
                        className="text-18 group-hover:text-white text-blue-B900 my-transition flex-centerY gap-2.5 my-transition whitespace-nowrap"
                      >
                        Book now
                        <ArrowCircleRight width={20} />
                      </Link>
                    </div>
                    <div className="flex justify-between items-center sm:divide-x divide-white text-16 text-white gap-mb-40">
                      <div className="w-full xxl:text-left text-center flex gap-1 xxl:flex-row flex-col justify-center">
                        Guests:{" "}
                        <span className="xxl:text-left text-center">
                          {item?.guests}
                        </span>
                      </div>
                      <div className="w-full text-center flex gap-1 xxl:flex-row flex-col justify-center">
                        Rating:{" "}
                        <span className="xxl:text-left text-center">
                          {item?.rating}
                        </span>
                      </div>
                      <div className="w-full text-center flex gap-1 xxl:flex-row flex-col justify-center">
                        Lenght:{" "}
                        <span className="xxl:text-left text-center">
                          {item?.length}ft
                        </span>
                      </div>
                      <div className="w-full text-center flex gap-1 xxl:flex-row flex-col justify-center">
                        Cabin:{" "}
                        <span className="xxl:text-right text-center">
                          {item?.cabin}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,17,56,0.00)_19.26%] to-[rgba(6,17,56,0.81)_89.31%]"></div>
              </div>
            </FadeUp>
          ))}
        </div>
        <div className="md:hidden flex-center items-end">
          <Link href="/blogs" className="btn bg-blue-B800 text-white">
            View All Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestRatedYachts;
