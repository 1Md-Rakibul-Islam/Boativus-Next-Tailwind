import FadeUp from "@/motion/FadeUp";
import { CounterElement } from "../../Global/UI";

const FeaturesCounter = () => {
  return (
    <section className="relative section-py overflow-hidden bg-[url('../media/images/counterBG.png')] bg-no-repeat bg-cover bg-right-bottom bg-[#030408]">
      <div className="container sm:grid grid-cols-12">
        <div className="relative col-start-1 xxl:col-end-10 xl:col-end-9 sm:col-end-8 grid items-center divide-y sm:divide-[#493C30] divide-blue-B80">
          <FadeUp className="flex-centerY gap-x-[60px] lg:pb-[30px] md:pb-6 sm:pb-5 pb-4 sm:text-left text-center ">
            <span className="text-24 font-normal text-white">
              Yachts Collection
            </span>
            <CounterElement
              counter={{
                counterNumber: 100,
                style: "text-57 text-white",
                sizeText: "+",
              }}
            />
          </FadeUp>

          <FadeUp className="flex-centerY gap-x-[60px] lg:py-[30px] md:py-6 sm:py-5 py-4 sm:text-left text-center ">
            <span className="text-24 font-normal text-white">
              Total Destinations
            </span>
            <CounterElement
              counter={{
                counterNumber: 85,
                style: "text-57 text-white",
                sizeText: "+",
              }}
            />
          </FadeUp>

          <FadeUp className="flex-centerY gap-x-[60px] lg:py-[30px] md:py-6 sm:py-5 py-4 sm:text-left text-center ">
            <span className="text-24 font-normal text-white">
              Safisfied Clients
            </span>
            <CounterElement
              counter={{
                counterNumber: 505,
                style: "text-57 text-white",
                sizeText: "+",
              }}
            />
          </FadeUp>

          <FadeUp className="flex-centerY gap-x-[60px] lg:pt-[30px] md:pt-6 sm:pt-5 pt-4 sm:text-left text-center ">
            <span className="text-24 font-normal text-white">
              Expert Skipper
            </span>
            <CounterElement
              counter={{
                counterNumber: 55,
                style: "text-57 text-white",
                sizeText: "+",
              }}
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCounter;
