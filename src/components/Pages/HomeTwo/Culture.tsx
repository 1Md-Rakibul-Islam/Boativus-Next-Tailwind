import FadeUp from "@/motion/FadeUp";
import Image from "next/image";
import Link from "next/link";
import culture1 from "@public/media/images/culture1.png";
import culture2 from "@public/media/images/culture2.png";

const Culture = () => {
  return (
    <section className="bg-white">
      <FadeUp className="grid md:grid-cols-2 grid-cols-1 ">
        <div>
          <div className="relative w-full h-full min-h-min max-h-[480px] px-8 group  overflow-hidden">
            <div className="relative z-[3] flex-center flex-col text-center">
              <h6 className="text-18 text-white gap-mt-60 gap-mb-16">
                Culture
              </h6>
              <h2 className="text-43 text-white gap-mb-16">About Boativus</h2>
              <div className="bg-warning-1 w-[85px] h-0.5 gap-mb-16"></div>
              <p className="text-18 text-white xxl:mb-36 xl:mb-28 lg:mb-24 md:mb-20 sm:mb-16 mb-12">
                Bright. Unique. Modern.
              </p>

              <Link
                href="/about-one"
                className="btn text-white hover:text-blue-B900 bg-blue-B900 hover:bg-brown-B300 border border-blue-B500 gap-mb-40"
              >
                Explore now
              </Link>
            </div>
            <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[rgba(6,17,56,0.00)_19.26%] to-[rgba(6,17,56,0.81)_89.31%]"></div>
            <Image
              className="absolute inset-0 w-full h-full group-hover:scale-110 my-transition"
              src={culture2}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="relative w-full h-full min-h-min max-h-[480px] px-8 group  overflow-hidden">
            <div className="relative z-[3] flex-center flex-col text-center">
              <h6 className="text-18 text-white gap-mt-60 gap-mb-16">
                Culture
              </h6>
              <h2 className="text-43 text-white gap-mb-16">Team</h2>
              <div className="bg-warning-1 w-[85px] h-0.5 gap-mb-16"></div>
              <p className="text-18 text-white xxl:mb-36 xl:mb-28 lg:mb-24 md:mb-20 sm:mb-16 mb-12">
                Real passions.
              </p>

              <Link
                href="/our-team"
                className="btn text-white hover:text-blue-B900 bg-blue-B900 hover:bg-brown-B300 border border-blue-B500 gap-mb-40"
              >
                Explore now
              </Link>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,17,56,0.00)_19.26%] to-[rgba(6,17,56,0.81)_89.31%]"></div>
            <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[rgba(6,17,56,0.00)_19.26%] to-[rgba(6,17,56,0.81)_89.31%]"></div>
            <Image
              className="absolute inset-0 w-full h-full group-hover:scale-110 my-transition"
              src={culture1}
              alt=""
            />
          </div>
        </div>
      </FadeUp>
    </section>
  );
};

export default Culture;
