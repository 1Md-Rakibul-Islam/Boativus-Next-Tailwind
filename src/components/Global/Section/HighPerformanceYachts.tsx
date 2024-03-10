import FadeUp from "@/motion/FadeUp";
import { CounterElement } from "../UI";

const HighPerformanceYachts = () => {
  return (
    <section className="bg-white relative z-[1]">
      <div className="bg-[url('../media/images/high-performance-yachtsBg.png')] relative bg-cover bg-top lg:h-[444px] md:h-[420px] sm:h-[400px] h-[360px]"></div>
      <div className="container relative -mt-[300px] z-[2]">
        <div className="relative">
          <FadeUp>
            <h2 className="text-57 text-center text-white gap-mb-64 ">
              Our High Performance Yachts Open The{" "}
              <br className="xl:block hidden" />
              World Of Luxury & Entertainment
            </h2>
          </FadeUp>
          <FadeUp className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 my-gap-24 ">
            <div className="w-full h-full flex-center flex-col p-32px rounded-lg shadow-4 my-transition group bg-white hover:bg-brown-B300">
              <div className="p-2.5 rounded-[15px] border border-brown-B300 gap-mb-24 bg-white">
                <img
                  className="min-w-fit min-h-fit max-w-[60px] max-h-[60px] "
                  src="../media/icons/high-performance-details1.png"
                  alt="img"
                />
              </div>
              <CounterElement
                counter={{
                  style:
                    "text-57 text-43 font-semibold text-center text-blue-B900 gap-mb-16",
                  counterNumber: 108,
                  sizeText: "+",
                }}
              />
              <p className="text-18 text-center text-blue-B200 group-hover:text-blue-B300">
                Experienced Sailing Crew
              </p>
            </div>
            <div className="w-full h-full flex-center flex-col p-32px rounded-lg shadow-4 my-transition group bg-white hover:bg-brown-B300">
              <div className="p-2.5 rounded-[15px] border border-brown-B300 gap-mb-24 bg-white">
                <img
                  className="min-w-fit min-h-fit max-w-[60px] max-h-[60px] "
                  src="../media/icons/high-performance-details2.png"
                  alt="img"
                />
              </div>
              <CounterElement
                counter={{
                  style:
                    "text-57 text-43 font-semibold text-center text-blue-B900 gap-mb-16",
                  counterNumber: 9237,
                  sizeText: "+",
                }}
              />
              <p className="text-18 text-center text-blue-B200 group-hover:text-blue-B300">
                Families Enjoyed Holidays
              </p>
            </div>
            <div className="w-full h-full flex-center flex-col p-32px rounded-lg shadow-4 my-transition group bg-white hover:bg-brown-B300">
              <div className="p-2.5 rounded-[15px] border border-brown-B300 gap-mb-24 bg-white">
                <img
                  className="min-w-fit min-h-fit max-w-[60px] max-h-[60px] "
                  src="../media/icons/high-performance-details3.png"
                  alt="img"
                />
              </div>
              <CounterElement
                counter={{
                  style:
                    "text-57 text-43 font-semibold text-center text-blue-B900 gap-mb-16",
                  counterNumber: 96,
                  sizeText: "+",
                }}
              />
              <p className="text-18 text-center text-blue-B200 group-hover:text-blue-B300">
                Boats Available For Rent Out
              </p>
            </div>
            <div className="w-full h-full flex-center flex-col p-32px rounded-lg shadow-4 my-transition group bg-white hover:bg-brown-B300">
              <div className="p-2.5 rounded-[15px] border border-brown-B300 gap-mb-24 bg-white">
                <img
                  className="min-w-fit min-h-fit max-w-[60px] max-h-[60px] "
                  src="../media/icons/high-performance-details4.png"
                  alt="img"
                />
              </div>
              <CounterElement
                counter={{
                  style:
                    "text-57 text-43 font-semibold text-center text-blue-B900 gap-mb-16",
                  counterNumber: 49,
                  sizeText: "+",
                }}
              />
              <p className="text-18 text-center text-blue-B200 group-hover:text-blue-B300">
                Fully Customized Packages
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default HighPerformanceYachts;
