import FadeUp from "@/motion/FadeUp";
import { Link } from "react-router-dom";

const Culture = () => {
  return (
    <section className="bg-white">
      <FadeUp className="grid md:grid-cols-2 grid-cols-1 ">
        <div>
          <div className="relative w-full h-full px-8 bg-[url('../media/images/culture2.png')] bg-no-repeat bg-cover">
            <div className="relative z-[1] flex-center flex-col text-center">
              <h6 className="text-18 text-white gap-mt-60 gap-mb-16">
                Culture
              </h6>
              <h2 className="text-43 text-white gap-mb-16">About Boativus</h2>
              <div className="bg-warning-1 w-[85px] h-0.5 gap-mb-16"></div>
              <p className="text-18 text-white xxl:mb-36 xl:mb-28 lg:mb-24 md:mb-20 sm:mb-16 mb-12">
                Bright. Unique. Modern.
              </p>

              <Link
                to="/about-1"
                className="btn text-white hover:text-blue-B900 bg-blue-B900 hover:bg-brown-B300 border border-blue-B500 gap-mb-40"
              >
                Explore now
              </Link>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,17,56,0.00)_19.26%] to-[rgba(6,17,56,0.81)_89.31%]"></div>
          </div>
        </div>
        <div>
          <div className="relative w-full h-full px-8 bg-[url('../media/images/culture1.png')] bg-no-repeat bg-cover">
            <div className="relative z-[1] flex-center flex-col text-center">
              <h6 className="text-18 text-white gap-mt-60 gap-mb-16">
                Culture
              </h6>
              <h2 className="text-43 text-white gap-mb-16">Team</h2>
              <div className="bg-warning-1 w-[85px] h-0.5 gap-mb-16"></div>
              <p className="text-18 text-white xxl:mb-36 xl:mb-28 lg:mb-24 md:mb-20 sm:mb-16 mb-12">
                Real passions.
              </p>

              <Link
                to="/our-team"
                className="btn text-white hover:text-blue-B900 bg-blue-B900 hover:bg-brown-B300 border border-blue-B500 gap-mb-40"
              >
                Explore now
              </Link>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,17,56,0.00)_19.26%] to-[rgba(6,17,56,0.81)_89.31%]"></div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
};

export default Culture;
