import { Link } from "react-router-dom";
import { Star } from "@phosphor-icons/react/dist/ssr";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { yachts } from "@public/data/yachts";
import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";

const BestLuxuryYachtSection = () => {
  const bestYachts = yachts?.filter((yacht) => yacht?.category === "best");
  return (
    <section className="bg-blue-B900">
      <div className="container section-py">
        <div className="text-center gap-mb-64">
          <FadeDown>
            <h4 className="text-24 gap-mb-16 text-brown-B50">
              Our Best luxury yacht
            </h4>
          </FadeDown>
          <h2 className="text-57 gap-mb-24 text-white">
            Find the Most Appropriate Boat <br className="sm:block hidden" />
            Rental for You
          </h2>
          <FadeUp>
            <p className="text-18 text-blue-B50">
              Embark on an epic adventure with friends and family! Whether
              seeking a party yacht or a relaxed sea excursion
              <br className="sm:block hidden" />
              in Dubai, a guaranteed great time awaits under the glorious
              sunshine. Book now!
            </p>
          </FadeUp>
        </div>
        <FadeUp>
          <div className="grid lg:grid-cols-2 grid-cols-1 my-gap-24">
            {bestYachts?.map((item, idx) => (
              <div key={idx} className="rounded-lg bg-blue-B800">
                <div className="relative">
                  <div className="overflow-hidden max-h-[297px] min-h-fit rounded-t-lg w-full">
                    <img
                      className="rounded-t-lg w-full h-auto hover:scale-110 my-transition"
                      alt="boat"
                      src={item?.image[0]}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-[rgba(6,17,56,0.71)] md:py-3 sm:py-2.5 py-2 lg:px-5 md:px-4 px-3">
                    <div className="flex-centerY justify-between">
                      <div className="flex-centerY sm:gap-2 gap-1.5">
                        {Array.from({ length: item?.rating }, (_, i) => (
                          <Star
                            weight="fill"
                            className="text-warning-2 icon-24"
                            key={i}
                          />
                        ))}
                      </div>
                      <h4 className="text-32 text-white">${item?.price}</h4>
                    </div>
                  </div>
                </div>

                <div className="p-24px">
                  <h4 className="text-32 text-white gap-mb-32">
                    {item?.title}
                  </h4>
                  <div className="flex justify-between items-center sm:divide-x divide-white text-18 text-white gap-mb-32">
                    <div className="w-full xxl:text-left text-center flex gap-1 xxl:flex-row flex-col xxl:justify-start justify-center">
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
                    <div className="w-full xxl:text-right text-center flex gap-1 xxl:flex-row flex-col xxl:justify-end justify-center">
                      Cabin:{" "}
                      <span className="xxl:text-right text-center">
                        {item?.cabin}
                      </span>
                    </div>
                  </div>
                  <p className="text-18 text-white gap-mb-40">
                    {item?.details}
                  </p>
                  <div className="flex-centerY my-gap-24">
                    <Link
                      to="/yachts/1"
                      className="btn inline-flex items-center gap-2 hover:text-blue-B900 text-white bg-blue-B700 hover:bg-brown-B300"
                    >
                      Book now
                      <ArrowCircleRight className="icon-24 text-xl" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default BestLuxuryYachtSection;

<section className="bg-blue-B900">
  <div className="container section-py"></div>
</section>;
