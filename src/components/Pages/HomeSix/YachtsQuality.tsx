import FadeUp from "@/motion/FadeUp";
import { ArrowCircleRight, Checks } from "@phosphor-icons/react";

const YachtsQuality = () => {
  return (
    <section className="lg:pb-20 md:pb-16 pb-14 bg-white overflow-x-hidden">
      <div className="container">
        <div className="grid xl:grid-cols-12 grid-cols-1 items-center my-gap-24">
          <div className="xl:col-start-1 xxl:col-end-6 xl:col-end-7 flex justify-end xl:order-1 order-2 h-full xxl:mr-0 xl:mr-5 mr-0">
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  className="xl:max-w-[unset] min-h-[400px] object-cover hover:scale-110 my-transition"
                  src="../media/images/why-boutivus.png"
                  alt=""
                />
              </div>
              <div className="px-24px py-32px bg-brown-B300 max-w-[554px] absolute right-0 -bottom-[12%] xxl:-mr-16 xl:-mr-10">
                <div className="flex-centerY my-gap-32 md:flex-row flex-col">
                  <p className="text-blue-B900">
                    Enjoy professional, high-quality boat and yacht maintenance
                    services
                  </p>
                  <div className="w-[2px] h-[50px] bg-white  md:block hidden"></div>
                  <a
                    href="#"
                    className="btn text-white hover:text-blue-B900 bg-blue-B900 hover:bg-white flex-center whitespace-nowrap gap-2"
                  >
                    Choose a plan
                    <ArrowCircleRight className="text-white sm:text-4xl text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-start-7 xl:col-end-13 xl:order-2 order-1">
            <FadeUp>
              <h5 className="text-24 text-brown-B300 gap-mb-16 xl:gap-mt-64 ">
                Why Boutivus Yachts
              </h5>
            </FadeUp>
            <FadeUp>
              <h2 className="text-57 text-blue-B900 gap-mb-32 gap-mb-16 ">
                Highly experienced technicians and craftsmen, dockage, and
                quality.
              </h2>
            </FadeUp>
            <FadeUp>
              <p className="text-18 text-blue-B300 gap-mb-32 ">
                High humidity, corrosion, long parking and an active use of the
                boat in an aggressive marine environment detrimental effect.
              </p>
            </FadeUp>
            <FadeUp>
              <ul className="grid sm:grid-cols-2 grid-cols-1 my-gap-24 md:gap-y-4 sm:gap-y-3 gap-y-2.5  list-disc pl-5 text-18 text-blue-B800 ">
                <li className="flex-centerY gap-2">
                  <Checks className="icon-24" />
                  Skilled technicians & craftspeople
                </li>
                <li className="flex-centerY gap-2">
                  <Checks className="icon-24" />
                  Complete Yacht Care Services
                </li>
                <li className="flex-centerY gap-2">
                  <Checks className="icon-24" />A facility for docking ships
                </li>
                <li className="flex-centerY gap-2">
                  <Checks className="icon-24" />
                  Dedicated Customer Care
                </li>
                <li className="flex-centerY gap-2">
                  <Checks className="icon-24" />
                  Our commitment to quality
                </li>
                <li className="flex-centerY gap-2">
                  <Checks className="icon-24" />
                  Affordable, high-quality work
                </li>
              </ul>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YachtsQuality;
