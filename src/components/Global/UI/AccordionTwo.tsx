"use client";

import { Minus, Plus } from "@phosphor-icons/react";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { faqType } from "@/config/types";
import FadeUp from "@/motion/FadeUp";

const AccordionTwo = ({ faqItems }: { faqItems: faqType[] }) => {
  const [toggle, setToggle] = useState<number | null>(0);

  return (
    <div className="w-full grid my-gap-24">
      {faqItems?.map((item, idx) => (
        <FadeUp key={idx}>
          <div
            onClick={() => (toggle !== idx ? setToggle(idx) : setToggle(null))}
            className={`${
              toggle == idx ? "bg-brown-B300" : "bg-white"
            } shadow-6 lg:px-8 md:px-6 sm:px-5 px-4 md:py-4 sm:py-3 py-2.5 my-transition-2`}
          >
            <div className="flex my-gap-24 items-center justify-between accordionTwo-header cursor-pointer">
              <h4 className="text-24 text-blue-B900 my-gap-20">
                {item?.question}
              </h4>
              <button
                className={`${
                  toggle == idx ? "bg-[#A88A69]" : "bg-brown-B300"
                } flex-center rounded-full text-white p-1.5 my-transition`}
              >
                {toggle == idx ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </button>
            </div>
            <AnimateHeight
              height={toggle == idx ? "auto" : 0}
              duration={500}
              className="md:pr-7 sm:pr-5 pr-5"
            >
              <div className="w-full h-[1px] bg-[#E7D0B7] gap-mt-16"></div>
              <p className="gap-mt-20 text-left text-18 text-blue-B900">
                Chartering a yacht provides a unique, luxurious, and
                customizable travel experience, offering privacy and access to
                exclusive destinations.
              </p>
            </AnimateHeight>
          </div>
        </FadeUp>
      ))}
    </div>
  );
};

export default AccordionTwo;
