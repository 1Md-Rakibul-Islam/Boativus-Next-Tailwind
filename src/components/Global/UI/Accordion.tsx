"use client";

import { Minus, Plus } from "@phosphor-icons/react";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { faqType } from "@/config/types";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";

const Accordion = ({ faqItems }: { faqItems: faqType[] }) => {
  const [toggle, setToggle] = useState<number | null>(null);

  return (
    <div className="w-full grid my-gap-24">
      {faqItems?.map((item, idx) => (
        <FadeUp key={idx}>
          <div
            onClick={() => (toggle !== idx ? setToggle(idx) : setToggle(null))}
            className="shadow-6 lg:px-8 md:px-6 sm:px-5 px-4 md:py-4 sm:py-3 py-2.5"
          >
            <div className="flex my-gap-24 items-center justify-between accordion-header cursor-pointer">
              <div className="flex-centerY my-gap-20">
                <Image
                  className="sm:w-10 sm:h-10 w-8 h-8"
                  src="/media/icons/faq-icon.png"
                  alt="faq"
                />
                <h4 className="text-24 text-blue-B900">{item?.question}</h4>
              </div>
              <button className="flex-center bg-brown-B300 rounded-full text-white p-1.5">
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
              <p className="gap-mt-20 text-left text-18 text-blue-B300">
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

export default Accordion;
