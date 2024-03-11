import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
import { ArrowCircleRight, ArrowDown } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const HomeFiveBanner = () => {
  return (
    <section className="relative z-[1] bg-[url('/media/images/heroBannerBG5.png')] bg-no-repeat bg-cover">
      <div className="relative w-full xl:pt-[360px] lg:pt-80 md:pt-48 pt-32">
        <div className="container relative z-[1] lg:pb-[400px] lg:mb-0 gap-mb-64">
          <div className="max-w-[636px] lg:text-left text-center">
            <FadeUp>
              <h1 className="gap-mb-32 text-76 text-white">
                Luxury yachts for sale & for charter
              </h1>
            </FadeUp>
            <FadeDown>
              <p className="gap-mb-40 text-18 text-white">
                Specialising in yacht sales & purchase, luxury yacht charter and
                yacht management, Boativus offers a tailored, professional and
                enthusiastic service to our clients.
              </p>
            </FadeDown>
            <FadeUp className="flex-centerY lg:justify-start justify-center my-gap-24">
              <Link
                href="/buy-yacht"
                className="btn hover:text-blue-B900 text-white bg-blue-B900 hover:bg-brown-B300"
              >
                Get to know more
              </Link>
              <Link
                className=" bg-blue-B900 hover:bg-brown-B300 md:w-16 md:h-16 sm:w-14 sm:h-14 w-11 h-11 flex-center rounded-full group"
                href="/yachts"
              >
                <ArrowDown className="icon-24 text-2xl group-hover:text-blue-B900 text-white group-hover:-rotate-90 my-transition" />
              </Link>
            </FadeUp>
          </div>
        </div>
        <div className="lg:absolute xl:right-[25%] lg:right-[22%] md:right-[18%] left-0 bottom-0 lg:mx-0 mx-5">
          <div className="xxl:pl-[22%] xl:pl-[20%] lg:pl-[18%] bg-blue-B900 xl:py-16 lg:py-14 md:py-12 sm:py-11 py-10 px-5 relative z-[1]">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-gap-24 sm:text-left text-center">
              <div className="flex flex-col sm:items-start items-center">
                <h6 className="text-18 text-blue-B100 gap-mb-16">001</h6>
                <h5 className="text-24 text-white gap-mb-40">
                  Buying a Yacht?
                </h5>
                <Link
                  href="/yachts"
                  className="text-white hover:text-brown-B300 my-transition  text-18 flex-centerY gap-2.5"
                >
                  Browse more
                  <ArrowCircleRight width={20} height={20} />
                </Link>
              </div>
              <div className="flex flex-col sm:items-start items-center">
                <h6 className="text-18 text-blue-B100 gap-mb-16">002</h6>
                <h5 className="text-24 text-white gap-mb-40">
                  Yacht Chartering?
                </h5>
                <Link
                  href="/buy-yacht"
                  className="text-white hover:text-brown-B300 my-transition text-18 flex-centerY gap-2.5"
                >
                  Browse more
                  <ArrowCircleRight width={20} height={20} />
                </Link>
              </div>
              <div className="flex flex-col sm:items-start items-center">
                <h6 className="text-18 text-blue-B100 gap-mb-16">003</h6>
                <h5 className="text-24 text-white  hover:text-brown-B300 my-transition gap-mb-40">
                  Selling a Yacht?
                </h5>
                <Link
                  href="/sell"
                  className="text-white hover:text-brown-B300 my-transition text-18 flex-centerY gap-2.5"
                >
                  Browse more
                  <ArrowCircleRight width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-glass-1"></div>
    </section>
  );
};

export default HomeFiveBanner;
