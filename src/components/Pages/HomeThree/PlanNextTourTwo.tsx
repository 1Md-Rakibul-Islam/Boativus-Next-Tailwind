"use client";

import FadeUp from "@/motion/FadeUp";
import { EnvelopeSimpleOpen, PhoneCall, Play } from "@phosphor-icons/react";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

const PlanNextTourTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="relative section-pt bg-[url('/media/images/plan-next-tourBG2.png')] bg-no-repeat bg-cover bg-white">
      <div className="container">
        <div className="section-pb grid grid-cols-12 my-gap-24 relative z-[1]">
          <div className="xl:col-span-8 lg:col-span-9 col-span-12 lg:mb-0 gap-mb-32 md:text-left text-center">
            <FadeUp>
              <h4 className="text-24 text-brown-B300 gap-mb-16">
                Give us a call or drop an email, We endeavor to answer within 24
                hours
              </h4>
            </FadeUp>
            <FadeUp>
              <h2 className="text-57 text-brown-B50 gap-mb-40">
                Luxury Yacht Charter
                <br className="xxl:block hidden" />
                Let’s Plan Your Next Tour!
              </h2>
            </FadeUp>
            <FadeUp className="flex-centerY md:justify-start justify-center gap-2 gap-mb-24">
              <PhoneCall
                width={36}
                className="text-white sm:text-4xl text-3xl"
              />
              <p className="text-18 text-white flex sm:row flex-col">
                Booking a Charter Yacht :
                <a href="tel:4805550103">(480) 555-0103</a>
              </p>
            </FadeUp>
            <FadeUp className="flex-centerY md:justify-start justify-center gap-2">
              <EnvelopeSimpleOpen
                width={36}
                className="text-white sm:text-4xl text-3xl"
              />
              <p className="text-18 text-white flex sm:row flex-col">
                Booking a Charter Yacht :
                <a href="mail:info@Temp.con">info@Temp.con</a>
              </p>
            </FadeUp>
          </div>
          <div className="xl:col-span-4 lg:col-span-3 col-span-12 flex-center">
            <div className="relative">
              <div className="bg-[url('/media/icons/watch-tour-btn-ring.png')] bg-no-repeat bg-center bg-contain md:w-[264px] md:h-[264px] sm:w-[240px] sm:h-[240px] w-[200px] h-[200px]">
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
          <ModalVideo
            channel="youtube"
            youtube={{ mute: 0, autoplay: 0 }}
            isOpen={isOpen}
            videoId="mqWUW6ypo6w"
            onClose={() => setOpen(false)}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-[rgba(6,17,56,0.80)]"></div>
    </section>
  );
};

export default PlanNextTourTwo;
