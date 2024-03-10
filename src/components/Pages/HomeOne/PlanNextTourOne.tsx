"use client";

import { EnvelopeSimpleOpen, PhoneCall, Play } from "@phosphor-icons/react";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import CounterElement from "../../Global/UI/CounterElement";
import icon1 from "../../../../public//media/icons/next-tour-icon1.png";
import icon2 from "../../../../public//media/icons/next-tour-icon2.png";
import icon3 from "../../../../public//media/icons/next-tour-icon3.png";
import icon4 from "../../../../public//media/icons/next-tour-icon4.png";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";

const PlanNextTourOne = () => {
  const [isOpen, setOpen] = useState(false);
  const counterData = [
    {
      id: 1,
      countNumber: 387,
      image: icon1,
      details: "Travel Destinations Offered",
    },
    {
      id: 2,
      countNumber: 108,
      image: icon2,
      details: "Boats Available For Rent Out",
    },
    {
      id: 3,
      countNumber: 307,
      image: icon3,
      details: "Families Enjoyed Holidays",
    },
    {
      id: 4,
      countNumber: 243,
      image: icon4,
      details: "Fully Customized Packages",
    },
  ];

  return (
    <section className="section-pt bg-[url('/media/images/plan-next-tour-bg.png')] bg-no-repeat bg-top bg-white">
      <div className="container">
        <div className="section-pb grid grid-cols-12 my-gap-24">
          <div className="xl:col-span-8 lg:col-span-9 col-span-12 lg:mb-0 gap-mb-32 md:text-left text-center">
            <FadeUp>
              <h4 className="text-24 text-white gap-mb-16">
                Give us a call or drop an email, We endeavor to answer within 24
                hours
              </h4>
              <h2 className="text-57 text-brown-B50 gap-mb-40">
                Charter a luxury yacht Let's Plan
                <br className="xxl:block hidden" />
                Your Next Tour!
              </h2>
              <div className="flex-centerY md:justify-start justify-center gap-2 gap-mb-24 ">
                <PhoneCall className="text-white sm:text-4xl text-3xl" />
                <p className="text-18 text-white flex sm:row flex-col">
                  Booking a Charter Yacht :
                  <a href="tel:4805550103">(480) 555-0103</a>
                </p>
              </div>
              <div className="flex-centerY md:justify-start justify-center gap-2 ">
                <EnvelopeSimpleOpen className="text-white sm:text-4xl text-3xl" />
                <p className="text-18 text-white flex sm:row flex-col">
                  Booking a Charter Yacht :
                  <a href="mail:info@Temp.con">info@Temp.con</a>
                </p>
              </div>
            </FadeUp>
          </div>
          <div className="xl:col-span-4 lg:col-span-3 col-span-12 flex-center">
            <div>
              <button
                onClick={() => setOpen(true)}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 popup-video btn_effect"
              >
                <Play
                  weight="fill"
                  className="ph-fill ph-play text-white text-xl"
                />
              </button>
            </div>
          </div>
        </div>
        <FadeUp>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-gap-24">
            {counterData?.map((item, idx) => (
              <div
                key={idx}
                className="w-full h-full flex-center flex-col px-24-py-40px rounded-lg shadow-4 bg-blue-B10"
              >
                <Image
                  className="min-w-fit max-w-16 gap-mb-16"
                  src={item?.image}
                  alt="img"
                />
                <CounterElement
                  counter={{
                    counterNumber: item?.countNumber,
                    style:
                      "text-32 font-semibold text-center text-blue-B900 sm:mb-2 mb-1.5 font-playfair",
                  }}
                />
                <p className="text-18 text-center text-blue-B500">
                  {item?.details}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="mqWUW6ypo6w"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default PlanNextTourOne;
