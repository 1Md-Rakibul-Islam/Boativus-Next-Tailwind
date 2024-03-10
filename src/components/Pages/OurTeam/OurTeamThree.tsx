import FadeUp from "@/motion/FadeUp";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import { team } from "@public/data/team";

const OurTeamThree = () => {
  return (
    <section className="section-py bg-white">
      <div className="container">
        <FadeUp className="text-center gap-mb-64">
          <h5 className="text-24 text-brown-B300 gap-mb-16">
            Our Skilled Team
          </h5>
          <h2 className="text-57 text-blue-B800 gap-mb-24">
            Meet our Skippers
          </h2>
          <p className="text-18 text-blue-B300 gap-mb-64">
            Boativus Yachts International is the result of a meeting of minds
            between some of the most authoritative,{" "}
            <br className="lg:block hidden" /> renowned and respected European
            brokers in the nautical and superyacht sales world.
          </p>
        </FadeUp>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-gap-24">
          {team?.slice(6, 15)?.map((item, idx) => (
            <FadeUp key={idx}>
              <div className="relative rounded-10 my-transition hover:border-brown-B350 border-transparent border-t bg-white  bg-center bg-no-repeat">
                <div className="absolute lg:top-6 md:top-5 sm:top-4 top-3 lg:right-6 md:right-5 sm:right-4 right-3 flex flex-col sm:gap-2.5 gap-2 z-[1]">
                  <a
                    href={item?.social[0]}
                    className="flex-center sm:w-10 sm:h-10 w-9 h-9 rounded-full border bg-white hover:bg-blue-B900 border-brown-B350 hover:border-blue-B900 my-transition group"
                  >
                    <FacebookLogo className="text-2xl group-hover:text-white text-brown-B350 my-transition" />
                  </a>
                  <a
                    href={item?.social[1]}
                    className="flex-center sm:w-10 sm:h-10 w-9 h-9 rounded-full border bg-white hover:bg-blue-B900 border-brown-B350 hover:border-blue-B900 my-transition group"
                  >
                    <InstagramLogo className="text-2xl group-hover:text-white text-brown-B350 my-transition" />
                  </a>
                  <a
                    href={item?.social[2]}
                    className="flex-center sm:w-10 sm:h-10 w-9 h-9 rounded-full border bg-white hover:bg-blue-B900 border-brown-B350 hover:border-blue-B900 my-transition group"
                  >
                    <TwitterLogo className="text-2xl group-hover:text-white text-brown-B350 my-transition" />
                  </a>
                  <a
                    href={item?.social[3]}
                    className="flex-center sm:w-10 sm:h-10 w-9 h-9 rounded-full border bg-white hover:bg-blue-B900 border-brown-B350 hover:border-blue-B900 my-transition group"
                  >
                    <LinkedinLogo className="text-2xl group-hover:text-white text-brown-B350 my-transition" />
                  </a>
                </div>
                <div className="bg-blue-B5">
                  <img
                    className="w-full rounded-10 gap-mb-32"
                    src={item?.image}
                    alt="team"
                  />
                </div>
                <div className="text-center z-[10]">
                  <h5 className="text-24 text-blue-B900 sm:mb-2 mb-1.5">
                    {item?.title}
                  </h5>
                  <span className="text-18 text-blue-B200">
                    {item?.details}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamThree;
