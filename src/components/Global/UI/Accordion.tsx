"use client";

import { faqType } from "@/config/types";
import FadeDown from "@/motion/FadeDown";
import { ArrowArcRight } from "@phosphor-icons/react";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

const Accordion = ({ faqItems }: { faqItems: faqType[] }) => {
  const [toggle, setToggle] = useState<number | null>(null);

  return (
    <div className="flex-center">
      <div className="max-w-[858px] w-full grid gap-5">
        {faqItems?.map((item, i) => (
          <FadeDown key={i}>
            <div
              onClick={() =>
                toggle !== item?.id ? setToggle(item?.id) : setToggle(null)
              }
              className="rounded-10 bg- flex justify-between items-center md:gap-x-6 md:gap-y-[30px] gap-y-6 gap-x-5 xl:py-6 lg:py-5 md:py-4 sm:py-3.5 py-3 xl:px-[30px] lg:px-6 md:px-5 sm:px-4 px-3.5 duration-700 ease-in-out transition-all text-white"
            >
              <div className="w-full">
                <div className="flex items-center justify-between my-gap-24">
                  <button
                    className={`${
                      item?.id === toggle && "text-white"
                    } text-24 font-bold cursor-pointer text-left my-transition w-full`}
                  >
                    {item?.question}
                  </button>
                  <button
                    className={` text-white border border-[#4e329a] rounded-full duration-700 sm:p-4 p-3 flex-center `}
                    aria-label="accordion"
                  >
                    <ArrowArcRight
                      className={`${
                        toggle === item?.id ? "rotate-90" : ""
                      } my-transition text-white  sm:w-6 sm:h-6 w-5 h-5`}
                    />
                  </button>
                </div>
                <AnimateHeight
                  height={toggle == item.id ? "auto" : 0}
                  duration={500}
                >
                  <p
                    className={`text-18 text-white text-left cursor-pointer transition-[max-height] duration-700 overflow-hidden gap-mt-16`}
                  >
                    {item?.answer}
                  </p>
                </AnimateHeight>
              </div>
            </div>
          </FadeDown>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
