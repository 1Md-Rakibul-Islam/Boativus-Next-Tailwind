"use client";

import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
import { EnvelopeSimpleOpen, PhoneCall, Play } from "@phosphor-icons/react";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

const PlanNextTourThree = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="relative z-[1] section-pb overflow-hidden lg:bg-white bg-blue-B900 lg:bg-[url('../media/images/FeaBg.png')] bg-no-repeat bg-cover">
      <div className="container lg:pt-0 section-pt">
        <div className="relative">
          <img
            className="lg:max-w-[unset]"
            src="../media/images/plan-next-tourBG3.png"
            alt="img"
          />
          <div className="absolute xxl:left-[54%] lg:left-[46%] top-1/2 left-1/2 lg:translate-x-0 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <div className="bg-[url('../media/icons/watch-tour-btn-ring.png')] bg-no-repeat bg-center bg-cover md:w-[264px] md:h-[264px] sm:w-[200px] sm:h-[200px] w-[140px] h-[140px]">
                <button
                  onClick={() => setOpen(true)}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 popup-video btn_effect"
                >
                  <Play weight="fill" className="text-white text-xl" />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 w-screen bg-[rgba(6,17,56,0.70)]"></div>
        </div>
        <div className="xl:pt-20 lg:pt-16 md:pt-14 sm:pt-12 pt-10 grid lg:grid-cols-2 grid-cols-1 my-gap-24 relative z-[1]">
          <FadeDown className="lg:mb-0 gap-mb-32">
            <h4 className="text-24 text-brown-B300 gap-mb-16 ">
              We respond to phone calls and emails within 24 hours.
            </h4>
            <h2 className="text-57 text-brown-B50 gap-mb-24 ">
              Luxury Yacht Charter
              <br className="xl:block hidden" />
              Let’s Plan Your Next Tour!
            </h2>
            <div className="flex-centerY gap-2 gap-mb-16 ">
              <PhoneCall className="text-white sm:text-4xl text-3xl" />
              <p className="text-18 text-white flex gap-2">
                Call Us :<a href="tel:4805550103">(480) 555-0103</a>
              </p>
            </div>
            <div className="flex-centerY gap-2 ">
              <EnvelopeSimpleOpen className="text-white sm:text-4xl text-3xl" />
              <p className="text-18 text-white flex gap-2">
                Email Us :<a href="mail:info@Temp.con">info@Temp.con</a>
              </p>
            </div>
          </FadeDown>
          <FadeUp className="grid md:grid-cols-2 grid-cols-1 my-gap-24 lg:gap-y-16 ">
            <div className="flex items-start lg:gap-4 md:gap-3 gap-2.5">
              <img
                className="md:w-[60px] w-10 md:h-[60px] h-10"
                src="../media/icons/next-tour-icon1.png"
                alt="icon"
              />
              <div>
                <h5 className="text-24 text-white gap-mb-24">
                  Priceless Experience
                </h5>
                <p className="text-16 text-white">
                  A Yacht trip in Boativus is voted #1 as most memorable and fun
                  experience.
                </p>
              </div>
            </div>
            <div className="flex items-start lg:gap-4 md:gap-3 gap-2.5">
              <img
                className="md:w-[60px] w-10 md:h-[60px] h-10"
                src="../media/icons/next-tour-icon2.png"
                alt="icon"
              />
              <div>
                <h5 className="text-24 text-white gap-mb-24">
                  Custom Packages
                </h5>
                <p className="text-16 text-white">
                  A Yacht trip in Boativus is voted #1 as most memorable and fun
                  experience.
                </p>
              </div>
            </div>
            <div className="flex items-start lg:gap-4 md:gap-3 gap-2.5">
              <img
                className="md:w-[60px] w-10 md:h-[60px] h-10"
                src="../media/icons/next-tour-icon3.png"
                alt="icon"
              />
              <div>
                <h5 className="text-24 text-white gap-mb-24">
                  Digitally Driven
                </h5>
                <p className="text-16 text-white">
                  We accept bitcoin or any other crypto coins like Ether, USDT
                  for yacht charter.
                </p>
              </div>
            </div>
            <div className="flex items-start lg:gap-4 md:gap-3 gap-2.5">
              <img
                className="md:w-[60px] w-10 md:h-[60px] h-10"
                src="../media/icons/next-tour-icon4.png"
                alt="icon"
              />
              <div>
                <h5 className="text-24 text-white gap-mb-24">Premium Yachts</h5>
                <p className="text-16 text-white">
                  A vast fleet of Yachts is available for a beautiful and
                  magical experience.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
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

export default PlanNextTourThree;
